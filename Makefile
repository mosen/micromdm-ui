.PHONY: build

PATH := $(shell npm bin):$(PATH)

all: deps build

deps:
	NODE_ENV=production npm install

build:
	NODE_ENV=production $(shell npm bin)/webpack --progress --colors

test:
	NODE_ENV=test $(shell npm bin)/mocha \
	--harmony \
	--reporter spec \
	test

lint:
	$(shell npm bin)/eslint src
