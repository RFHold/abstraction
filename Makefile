install:
	cd web && corepack enable && corepack prepare
	cd services && make install

hooks:
	git config hooks .hooks

check:
	node -v
	go version
	yarn -v

e2e:
	cd services && make run
	cd web && yarn preview --mode test
	cd web && yarn e2e

test:
	cd services && make test
	cd web && yard test

lint:
	cd services && make vet
	cd web && yard lint