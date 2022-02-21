SHELL=/bin/bash -o pipefail

pwd=$(shell pwd)
idu=$(shell id -u)
idg=$(shell id -g)

BUF_IMAGE=bufbuild/buf:1.0.0
BUF_WRK=$(shell cd .. && pwd)
BUF_WRK_SERVICES=services
BUF_IMG=buf-image

GOOSE_DIR=./schema
GOOSE_DB_STRING='user=abstraction password=secret dbname=abstraction port=5432 host=localhost sslmode=disable'
GOOSE_CMD=goose postgres $(GOOSE_DB_STRING)

COMPOSE_FILE=./docker/docker-compose.yaml

install-tools:
	go install golang.org/x/lint/golint

goose-up:
	cd $(GOOSE_DIR)/migrations && $(GOOSE_CMD) up

goose-redo:
	cd $(GOOSE_DIR)/migrations && $(GOOSE_CMD) redo

goose-down:
	cd $(GOOSE_DIR)/migrations && $(GOOSE_CMD) down

goose-status:
	cd $(GOOSE_DIR)/migrations && $(GOOSE_CMD) status

goose-fix:
	cd $(GOOSE_DIR)/migrations && goose fix
	cd $(GOOSE_DIR)/seeds && goose fix

goose-reset:
	cd $(GOOSE_DIR)/seeds && $(GOOSE_CMD) reset -no-versioning
	cd $(GOOSE_DIR)/migrations && $(GOOSE_CMD) reset

goose-seed:
	cd $(GOOSE_DIR)/seeds && $(GOOSE_CMD) up -no-versioning

run:
	docker compose -f $(COMPOSE_FILE) up

dev:
	docker compose -f $(COMPOSE_FILE) up postgres redis rabbitmq

buf:
	rm -rf pb/*
	rm -rf ../web/src/lib/api/*
	docker run --volume "$(BUF_WRK):/wrk" -w /wrk/$(BUF_WRK_SERVICES) $(BUF_IMAGE) build -o $(BUF_IMG)
	docker run --volume "$(BUF_WRK):/wrk" -w /wrk/$(BUF_WRK_SERVICES) $(BUF_IMAGE) generate proto

buf-ls:
	docker run --volume "$(BUF_WRK):/wrk" -w /wrk/$(BUF_WRK_SERVICES) $(BUF_IMAGE) ls-files

buf-lint:
	docker run --volume "$(BUF_WRK):/wrk" -w /wrk/$(BUF_WRK_SERVICES) $(BUF_IMAGE) lint

buf-breaking:
	docker run --volume "$(BUF_WRK):/wrk" -w /wrk/$(BUF_WRK_SERVICES) $(BUF_IMAGE) breaking --against $(BUF_IMG)

test:

fmt:
	go fmt ./

vet:
	go vet ./

lint:
	golint ./

build: