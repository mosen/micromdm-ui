#!/usr/bin/env bash
# This script simply runs the command to initialise the SCEP depot via a docker container.
DOCKER_DIR=$(pwd)/.docker

echo "Creating the CA certificate for the MicroMDM SCEP service"

# Make sure the image exists
docker pull micromdm/scep

# create CA
docker run -it --rm -v ${DOCKER_DIR}/scep/depot:/depot micromdm/scep ./scep ca -init

