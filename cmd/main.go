package main

import (
	"flag"
	"net"
	// gut "github.com/panyam/goutils/utils"
	"github.com/panyam/snippets/protos"
	"github.com/panyam/snippets/service"
	"log"
	// "os"
	// "regexp"
	// "strings"
	"google.golang.org/grpc"
)

var (
	log_file    = flag.String("log_file", "/tmp/harness.log", "Logfile to redirect all logs to.")
	addr        = flag.String("control_addr", ":7000", "Address of control service.")
	db_endpoint = flag.String("db_endpoint", "postgres://postgres:docker@localhost:5432/snippetsdb", "Endpoint of DB backing snippets shard targets.  Supported - sqlite eg (sqlite://~/.snippets/sqlite.db) or postgres eg (postgres://user:pass@localhost:5432/dbname)")
)

var grpcServer *grpc.Server

func main() {
	flag.Parse()
	startService()
}

func startService() (grpcServer *grpc.Server, err error) {
	grpcServer = grpc.NewServer(
	// grpc.StreamInterceptor(grpc_prometheus.StreamServerInterceptor),
	// grpc.UnaryInterceptor(grpc_prometheus.UnaryServerInterceptor),
	)
	protos.RegisterSnippetServiceServer(grpcServer, service.NewSnippetService())
	log.Printf("Initializing Snippets Server on %s", *addr)
	lis, err := net.Listen("tcp", *addr)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	grpcServer.Serve(lis)
	return grpcServer, err
}
