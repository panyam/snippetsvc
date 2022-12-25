package service

import (
	// gut "github.com/panyam/goutils/utils"
	"github.com/panyam/snippets/db"
	"github.com/panyam/snippets/protos"
	tspb "google.golang.org/protobuf/types/known/timestamppb"
)

func EnvironmentToProto(input *db.Environment) (out *protos.Environment) {
	out = &protos.Environment{
		UpdatedAt: tspb.New(input.UpdatedAt),
		CreatedAt: tspb.New(input.CreatedAt),
	}
	return
}

func EnvironmentFromProto(input *protos.Environment) (out *db.Environment) {
	out = &db.Environment{
		UpdatedAt: input.UpdatedAt.AsTime(),
		CreatedAt: input.CreatedAt.AsTime(),
	}
	return
}

func ExecutionToProto(input *db.Execution) (out *protos.Execution) {
	out = &protos.Execution{
		UpdatedAt: tspb.New(input.UpdatedAt),
		CreatedAt: tspb.New(input.CreatedAt),
	}
	return
}

func ExecutionFromProto(input *protos.Execution) (out *db.Execution) {
	out = &db.Execution{
		UpdatedAt: input.UpdatedAt.AsTime(),
		CreatedAt: input.CreatedAt.AsTime(),
	}
	return
}
