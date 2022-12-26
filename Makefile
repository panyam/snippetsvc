
PYPKGNAME=pysnippets
TSPKGNAME=tssnippets
GOROOT=$(which go)
GOPATH=$(HOME)/go
GOBIN=$(GOPATH)/bin
PATH:=$(PATH):$(GOROOT):$(GOPATH):$(GOBIN)
MAKEFILE_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))
SNIPPETS_ROOT=$(MAKEFILE_DIR)
# Generate the python client too
PY_OUT_DIR=$(SNIPPETS_ROOT)/protos/$(PYPKGNAME)
TS_OUT_DIR=$(SNIPPETS_ROOT)/protos/$(TSPKGNAME)


all: protos

protos: printenv goprotos pyprotos tsprotos

test:
	cd $(SNIPPETS_ROOT)/ && go test ./... -cover

goprotos:
	@echo "Generating GO bindings"
	protoc --go_out=$(SNIPPETS_ROOT) --go_opt=paths=source_relative          \
       --go-grpc_out=$(SNIPPETS_ROOT) --go-grpc_opt=paths=source_relative	\
       --proto_path=$(SNIPPETS_ROOT)                     			\
      $(SNIPPETS_ROOT)/protos/snippets.proto

pyprotos:
	@echo "Generating Python bindings"
	mkdir -p $(PY_OUT_DIR) $(SNIPPETS_ROOT)/$(PYPKGNAME)
	python3 -m grpc_tools.protoc -I./protos   \
      --python_out="$(PY_OUT_DIR)"          \
      --grpc_python_out="$(PY_OUT_DIR)"     \
      --proto_path=$(SNIPPETS_ROOT)        	\
      $(SNIPPETS_ROOT)/protos/snippets.proto
	@mv $(PY_OUT_DIR)/protos/*.py $(SNIPPETS_ROOT)/$(PYPKGNAME)
	@echo "Cleaning up files..."
	rm -Rf $(PY_OUT_DIR)

tsprotos:
	@echo "Generating TS bindings"
	@rm -Rf $(TS_OUT_DIR) $(SNIPPETS_ROOT)/$(TSPKGNAME)/google
	@mkdir -p $(TS_OUT_DIR) $(SNIPPETS_ROOT)/$(TSPKGNAME)
	grpc_tools_node_protoc 									\
		--plugin=`which protoc-gen-ts_proto` 	\
		--ts_proto_out=$(TS_OUT_DIR)					\
		--ts_proto_opt=outputServices=generic-definitions,outputClientImpl=false,oneof=unions,snakeToCamel=false,esModuleInterop=true \
		--proto_path=$(SNIPPETS_ROOT)/protos	\
		$(SNIPPETS_ROOT)/protos/snippets.proto
	@mv $(TS_OUT_DIR)/* $(SNIPPETS_ROOT)/$(TSPKGNAME)/
	@echo "Cleaning up files..."
	rm -Rf $(TS_OUT_DIR)

printenv:
	@echo MAKEFILE_DIR=$(MAKEFILE_DIR)
	@echo SNIPPETS_ROOT=$(SNIPPETS_ROOT)
	@echo MAKEFILE_LIST=$(MAKEFILE_LIST)
	@echo SNIPPETS_ROOT=$(SNIPPETS_ROOT)
	@echo GOROOT=$(GOROOT)
	@echo GOPATH=$(GOPATH)
	@echo GOBIN=$(GOBIN)
	@echo PYPKGNAME=$(PYPKGNAME)
	@echo PY_OUT_DIR=$(PY_OUT_DIR)

## Setting up the dev db
pgdb:
	docker build -t snippetspgdb -f Dockerfile.pgdb .

runtestdb:
	mkdir -p $(MAKEFILE_DIR)/pgdata_test
	docker run --rm --name snippets-pgdb-container -v ${MAKEFILE_DIR}/pgdata_test:/var/lib/postgresql/data -e POSTGRES_PASSWORD=password -p 5432:5432 snippetspgdb

rundb:
	mkdir -p $(MAKEFILE_DIR)/pgdata
	docker run --rm --name snippets-pgdb-container -p 5432:5432 -v $(MAKEFILE_DIR)/pgdata:/var/lib/postgresql/data snippetspgdb

