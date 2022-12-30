package service

import (
	"context"
	"fmt"
	"github.com/panyam/goutils/utils"
	"io/ioutil"
	"log"
	"os"
	"path"
	// gut "github.com/panyam/goutils/utils"
	"github.com/panyam/snippets/protos"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	// "sort"
	// "time"
)

type SnippetService struct {
	protos.UnimplementedSnippetServiceServer
	EnvDir string
}

func NewSnippetService(envdir string) (out *SnippetService) {
	envdir = utils.ExpandUserPath(envdir)
	out = &SnippetService{EnvDir: envdir}
	os.MkdirAll(envdir, 0777)
	return
}

func (s *SnippetService) CreateEnvironment(ctx context.Context, request *protos.CreateEnvironmentRequest) (resp *protos.Environment, err error) {
	env := request.Environment
	if env.Platform != "node" {
		return nil, status.Error(codes.InvalidArgument, "Only node platforms are supported for now")
	}

	// our environment is a plain nodejs environment running TS so we need the following:
	// a package.json with the specified dependencies
	// Where do we keep info about our environments?

	// Questions:
	// where should env be created - in the envdir
	// what should env's folder be called?
	// The envdir we give will be
	if env.OwnerId == "" {
		return nil, status.Error(codes.InvalidArgument, "Invalid owner id")
	}

	ownerdir := path.Join(s.EnvDir, env.OwnerId)
	envdir := path.Join(ownerdir, "envs")
	os.MkdirAll(envdir, 0777)
	newenvdir, err := ioutil.TempDir(envdir, "env")
	if err != nil {
		return nil, err
	}
	os.MkdirAll(path.Join(newenvdir, "snippets"), 0777)
	return
}

func (s *SnippetService) CreateExecution(ctx context.Context, request *protos.CreateExecutionRequest) (resp *protos.CreateExecutionResponse, err error) {
	resp = &protos.CreateExecutionResponse{
		Execution: &protos.Execution{
			CodeBlocks: request.CodeBlocks,
			OwnerId:    request.OwnerId,
		},
	}
	log.Println("Executing code blocks: ", request.CodeBlocks)
	switch op := request.EnvDetails.(type) {
	case *protos.CreateExecutionRequest_EnvId:
		resp.Execution.EnvDetails = &protos.Execution_EnvId{
			EnvId: op.EnvId,
		}
		break
	case *protos.CreateExecutionRequest_EnvDir:
		stdout, stderr, err := ExecuteBlocks(request.SnippetId, request.CodeBlocks, op.EnvDir, false)
		if err != nil {
			return nil, err
		}
		resp.Execution.EnvDetails = &protos.Execution_EnvDir{
			EnvDir: op.EnvDir,
		}
		resp.Execution.ErrorOutput = stderr
		resp.Execution.BlockOutputs = stdout
		break
	case *protos.CreateExecutionRequest_NewEnv:
		resp.Execution.EnvDetails = &protos.Execution_NewEnv{
			NewEnv: op.NewEnv,
		}
		break
	default:
		fmt.Println("Invalid env_details field")
		break
	}
	return
}
