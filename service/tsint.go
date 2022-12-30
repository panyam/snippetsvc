package service

import (
	"crypto/sha512"
	"fmt"
	"github.com/panyam/goutils/conc"
	gut "github.com/panyam/goutils/utils"
	"io"
	"log"
	// "math/rand"
	"os"
	"os/exec"
	"path"
	"strings"
	"time"
)

func hash512(input string) string {
	sha_512 := sha512.New()
	// sha from a byte array
	sha_512.Write([]byte(input))
	return fmt.Sprintf("%x", sha_512.Sum(nil))
}

const DEFAULT_BOUNDARY = ">>>>>>>><<<<<<<<<>>>>>>>>><<<<<<<<<>>>>>>>><<<<<<<<<>>>>>>>>><<<<<<<<<"

type EvalOptions struct {
	Boundary string
	Timeout  time.Duration
}

type TSInterpreter struct {
	exited          bool
	closed          bool
	processOutput   string
	processError    string
	currEvalOptions EvalOptions
	cmd             *exec.Cmd
	tsOutReader     *conc.ReaderChan[[]byte, any]
	tsErrReader     *conc.ReaderChan[[]byte, any]
	tsStdIn         io.WriteCloser
	errorBuffer     strings.Builder
	outputBuffer    strings.Builder
	controlChannel  chan string
	resultChannel   chan conc.ValueOrError[string]
}

func NewTSInterpreter(envdir string) (*TSInterpreter, error) {
	out := &TSInterpreter{
		currEvalOptions: EvalOptions{
			Boundary: DEFAULT_BOUNDARY,
			Timeout:  time.Second * 5,
		},
		cmd:            exec.Command("ts-node", "-i"),
		controlChannel: make(chan string),
		resultChannel:  make(chan conc.ValueOrError[string]),
	}
	out.cmd.Dir = envdir
	tsStdOut, err := out.cmd.StdoutPipe()
	if err != nil {
		log.Println("Could not open stdout: ", err)
		return nil, err
	}
	tsStdErr, err := out.cmd.StderrPipe()
	if err != nil {
		log.Println("Could not open stderr: ", err)
		return nil, err
	}
	out.tsStdIn, err = out.cmd.StdinPipe()
	if err != nil {
		log.Println("Could not open stdin: ", err)
		return nil, err
	}
	out.tsOutReader = conc.NewReader[[]byte, any](func() ([]byte, error) {
		return io.ReadAll(tsStdOut)
	})
	out.tsErrReader = conc.NewReader[[]byte, any](func() ([]byte, error) {
		return io.ReadAll(tsStdErr)
	})
	err = out.cmd.Start()
	if err != nil {
		log.Println("Start Error: ", err)
		out.Exit()
		return nil, nil
	}

	// start the reader/writer thread
	go out.startReader()
	return out, nil
}

func (i *TSInterpreter) Exit() {
	i.tsOutReader.Stop()
	i.tsErrReader.Stop()
	i.tsStdIn.Close()
	i.controlChannel <- "stop"
}

/**
 * Eval a single block.
 */
func (i *TSInterpreter) EvalOne(block string, options *EvalOptions) (string, error) {
	block = strings.Trim(block, " \t\n")
	if len(block) == 0 {
		return "", nil
	}

	i.errorBuffer.Reset()
	i.outputBuffer.Reset()
	if options != nil {
		if len(options.Boundary) != 0 {
			i.currEvalOptions.Boundary = options.Boundary
		}
		i.currEvalOptions.Timeout = options.Timeout
	}

	// write the command and a logger command to see if boundary is received

	i.tsStdIn.Write([]byte(block))
	log.Println("Written block: ", block)

	boundaryCmd := fmt.Sprintf("\nconsole.log('%s')\n", i.currEvalOptions.Boundary)
	i.tsStdIn.Write([]byte(boundaryCmd))
	log.Println("Written boundary: ", boundaryCmd)

	// TODO - impose a max timeout
	result := <-i.resultChannel
	return result.Value, result.Error
}

/**
 * Starts the reader loop for reading output from programs's stdout
 */
func (i *TSInterpreter) startReader() {
	// use ticker for a timeout
	ticker := time.NewTicker(5 * time.Second)
	defer ticker.Stop()
	for {
		select {
		case <-ticker.C:
			log.Println("Ticker....")
			break
		case controlRequest := <-i.controlChannel:
			log.Println("Received stop signal.  Quitting Interpretr Reader.", controlRequest)
			return
		case errResult := <-i.tsErrReader.ResultChannel():
			log.Println("ErrRead: ", errResult)
			if errResult.Error != nil {
				i.resultChannel <- conc.ValueOrError[string]{
					Value: "",
					Error: errResult.Error,
				}
			} else {
				i.resultChannel <- conc.ValueOrError[string]{
					Value: "",
					Error: fmt.Errorf((string)(errResult.Value)),
				}
			}
			break
		case outResult := <-i.tsOutReader.ResultChannel():
			log.Println("OutRead: ", outResult)
			if outResult.Error != nil {
				// if there was an error then return it
				i.resultChannel <- conc.ValueOrError[string]{
					Value: "",
					Error: outResult.Error,
				}
			} else {
				foundBoundary := false
				content := (string)(outResult.Value)
				if strings.HasSuffix(content, i.currEvalOptions.Boundary) {
					content = content[:len(i.currEvalOptions.Boundary)]
					if len(content) == 0 {
						foundBoundary = true
						// we have reached the end
					} else if content[len(content)-1] == '\n' {
						foundBoundary = true
						content = content[:len(content)-1]
					}
				}
				i.outputBuffer.WriteString(content)
				if foundBoundary {
					i.resultChannel <- conc.ValueOrError[string]{
						Value: i.outputBuffer.String(),
						Error: nil,
					}
				}
			}
			break
		}
	}
}

func ExecuteBlocks(snippetid string, blocks []string, envdir string, force bool) (outstrs []string, errstr string, err error) {
	var code strings.Builder
	var boundaries []string
	for _, b := range blocks {
		h := hash512(b)
		boundary := fmt.Sprintf("<><><><><>%s<><><><><>", h)
		code.WriteString(b)
		code.WriteString("\n")
		code.WriteString(fmt.Sprintf("console.log('%s')\n", boundary))
		boundaries = append(boundaries, boundary)
	}

	stdout, stderr, err := Execute(snippetid, code.String(), envdir, force)
	// Now seperate these along the block boundaries
	if err != nil {
		return []string{}, "", err
	}
	errstr = stderr
	for _, b := range boundaries {
		// find where b begins from currInd
		nextInd := strings.Index(stdout, b)
		if nextInd < 0 {
			// we are done
			outstrs = append(outstrs, stdout)
			break
		} else {
			// otherwise split stdout around this boundary string
			head := stdout[:nextInd]
			outstrs = append(outstrs, head)
			stdout = stdout[nextInd+len(b)+1:] // +1 because our boundary console.log will print a \n
		}
	}
	return
}

func Execute(snippetid string, code string, envdir string, force bool) (string, string, error) {
	envdir = gut.ExpandUserPath(envdir)
	snippetDir := path.Join(envdir, "snippets", snippetid)
	os.MkdirAll(snippetDir, 0777)
	inFile := path.Join(snippetDir, "input.ts")
	outFile := path.Join(snippetDir, "stdout.txt")
	errFile := path.Join(snippetDir, "stderr.txt")
	mdFile := path.Join(snippetDir, "meta.json")

	log.Println("EnvDir: ", envdir)
	log.Println("SnippetDir: ", snippetDir)
	log.Println("SnippetInFile: ", inFile)
	log.Println("SnippetOutFile: ", outFile)
	log.Println("SnippetErrFile: ", errFile)
	// if !strings.HasSuffix(code, "\n") { code = code + "\n" }
	log.Println("Execting code: ", code)

	md, err := gut.JsonReadFile(mdFile)
	if err != nil && !os.IsNotExist(err) {
		log.Println("Unable to open file, err: ", err)
		return "", "", err
	}
	if md == nil {
		md = make(map[string]interface{})
	}
	metadata := md.(map[string]interface{})

	newHash := hash512(code)
	if !force {
		currHash, _ := metadata["codeHash"].(string)
		if strings.Compare(currHash, newHash) == 0 {
			if _, err = os.Stat(inFile); err == nil {
				if _, err = os.Stat(outFile); err == nil {
					// check file contents match then send cached version
					filesMatched := false
					if !filesMatched {
						currContents, err := os.ReadFile(inFile)
						if err != nil {
							log.Println("Cannot read input file: ", err)
							return "", "", err
						}
						filesMatched = code == string(currContents)
					}
					log.Println("Returning cached copy")
					contentsOut, err := os.ReadFile(outFile)
					contentsErr, err := os.ReadFile(errFile)
					return string(contentsOut), string(contentsErr), err
				}
			}
		}
	}

	os.WriteFile(inFile, []byte(code), 0777)
	cmd := exec.Command("ts-node", inFile)
	cmd.Dir = envdir
	stdout, err := cmd.StdoutPipe()
	if err != nil {
		log.Println("Cannot get stdout")
		return "", "", err
	}
	stderr, err := cmd.StderrPipe()
	if err != nil {
		log.Println("Cannot get stderr")
		return "", "", err
	}
	if err := cmd.Start(); err != nil {
		log.Println("Cannot start command", err)
		return "", "", err
	}

	procOut, err := io.ReadAll(stdout)
	if err != nil {
		log.Println("Cannot read stdout", err)
		return "", "", err
	}

	procErr, err := io.ReadAll(stderr)
	if err != nil {
		log.Println("Cannot read stderr", err)
		return "", "", err
	}

	log.Printf("Out: (%s)", procOut)
	log.Printf("Err: (%s)", procErr)

	if err := cmd.Wait(); err != nil {
		log.Println("Error waiting for tsnode to finish", err)
		return "", "", err
	}

	metadata["codeHash"] = newHash
	gut.JsonWriteFile(metadata, mdFile, 0777)
	os.WriteFile(outFile, procOut, 0777)
	os.WriteFile(errFile, procErr, 0777)
	return string(procOut), string(procErr), nil
}
