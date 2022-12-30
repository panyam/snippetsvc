package service

import (
	"github.com/stretchr/testify/assert"
	"log"
	"testing"
)

func Test1(t *testing.T) {
	stdout, stderr, err := Execute("s2", `console.log("Hello world 2")`, "/tmp/enva", false)
	log.Println("so,se,er: ", stdout, stderr, err)
	assert.Equal(t, stdout, "Hello world 2\n")
	assert.Equal(t, stderr, "")
}

func Test2(t *testing.T) {
	stdout, stderr, err := Execute("s2", `
	console.log("Hello world 1");
	console.log("Hello world 2");
	`, "/tmp/enva", false)
	log.Println("so,se,er: ", stdout, stderr, err)
	assert.Equal(t, stdout, "Hello world 1\nHello world 2\n")
	assert.Equal(t, stderr, "")
}

func TestMany(t *testing.T) {
	stdout, stderr, err := ExecuteBlocks("s2", []string{
		`console.log("Hello world 1");`,
		`console.log("Hello world 2");`,
	}, "/tmp/enva", false)
	log.Println("so,se,er: ", stdout, stderr, err)
	assert.Equal(t, stdout, []string{
		"Hello world 1\n",
		"Hello world 2\n",
	})
	assert.Equal(t, stderr, "")
}

/*
func TestBasic(t *testing.T) {
	log.Println("here..")
	t1, err := NewTSInterpreter("/tmp/enva")
	assert.Equal(t, err, nil)
	cmd := "console.log('hello world')"
	log.Println("Evaluating: ", cmd)
	result, err := t1.EvalOne(cmd, nil)
	log.Println("Result, Err: ", result, err)
	assert.Equal(t, result, "Hello world")
}
*/
