.PHONY: build

PATH := $(shell npm bin):$(PATH)

all: build

deps:
	npm install

build:
	$(shell npm bin)/webpack --progress --colors
