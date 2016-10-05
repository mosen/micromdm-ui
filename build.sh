#!/usr/bin/env bash

docker run \
  --rm \
  -i \
  -t \
  -v $(pwd):/app \
  jmfirth/webpack \
  webpack
