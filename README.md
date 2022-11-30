# CarbonStream
Docker conatiner for carbonstream data aggregator 
### Environment Variables
Set environment variable $ENVIRONMENT to the cloud environment for deployment.
For example
`export ENVIRONMENT="dev"`


### Virtual Environment Setup

`make init`

# Using fish shell
source .venv/bin/activate.fish

# Using bash
source .venv/bin/activate

pip3 install -r requirements.txt

### Build Container Image

docker build -t build-pipeline-ecs .

docker build — pull — rm -f Dockerfile -t build-pipeline-ecs:latest .
docker build — pull — rm -f Dockerfile -t build-pipeline-ecs:v0.1.3 .

### Build Container Image
docker run -p 9000:8080 build-pipeline-ecs

docker exec -it <yourContainer> bash


## Dump folders 
### Test Folders

