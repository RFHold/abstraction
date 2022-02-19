SHELL=/bin/bash -o pipefail

pwd=$(shell pwd)
idu=$(shell id -u)
idg=$(shell id -g)

BUF_IMAGE=bufbuild/buf:1.0.0
BUF_WRK=$(shell cd .. && pwd)

install:
	docker build docker/buf/ -t abstraction-buf

db-up:

db-down:

db-reset:

run:

buf:
	rm -rf pb/*
	rm -rf ../web/src/lib/api/*
	docker run --volume "$(BUF_WRK):/wrk" -w /wrk/services $(BUF_IMAGE) build -o buf-image.json
	docker run --volume "$(BUF_WRK):/wrk" -w /wrk/services $(BUF_IMAGE) generate proto

buf-ls:
	docker run --volume "$(BUF_WRK):/wrk" -w /wrk/services $(BUF_IMAGE) ls-files

buf-lint:
	docker run --volume "$(BUF_WRK):/wrk" -w /wrk/services $(BUF_IMAGE) lint

buf-breaking:
	docker run --volume "$(BUF_WRK):/wrk" -w /wrk/services $(BUF_IMAGE) breaking --against buf-image.json

test:

seed:

seed-e2e:

seed-test:
