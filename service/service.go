package service

import (
	"context"
	// "fmt"
	// gut "github.com/panyam/goutils/utils"
	"github.com/panyam/snippets/protos"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	// "log"
	// "sort"
	// "time"
)

type SnippetService struct {
	protos.UnimplementedSnippetServiceServer
}

func NewSnippetService() (out *SnippetService) {
	out = &SnippetService{}
	return
}

func (s *SnippetService) EnsureEnvironment(ctx context.Context, request *protos.EnsureEnvironmentRequest) (resp *protos.Environment, err error) {
	if request.Platform != "node" {
		return nil, status.Error(codes.InvalidArgument, "Only node platforms are supported for now")
	}

	// our environment is a plain nodejs environment running TS so we need the following:
	// a package.json with the specified dependencies
	return
}

func (s *SnippetService) CreateExecution(ctx context.Context, request *protos.CreateExecutionRequest) (resp *protos.CreateExecutionResponse, err error) {
	return
}
