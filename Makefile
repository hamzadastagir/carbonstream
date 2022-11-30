
MODULE := build-pipeline-ecs
TAG := $(shell git describe --tags --always --dirty)

BLUE='\033[0;34m'
NC='\033[0m' # No Color

.PHONY: init

init:
	@python3 -m venv .venv

setup:
	@pip3 install -r requirements.txt