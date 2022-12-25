package service

import (
	"context"
	// "fmt"
	// gut "github.com/panyam/goutils/utils"
	"github.com/panyam/snippets/protos"
	// "google.golang.org/grpc/codes"
	// "google.golang.org/grpc/status"
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

func (s *SnippetService) CreateEnvironment(ctx context.Context, request *protos.CreateEnvironmentRequest) (resp *protos.CreateEnvironmentResponse, err error) {
	return
}

func (s *SnippetService) CreateExecution(ctx context.Context, request *protos.CreateExecutionRequest) (resp *protos.CreateExecutionResponse, err error) {
	return
}
