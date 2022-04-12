FROM node:lts

RUN apt-get update

## AWS CLI
RUN apt-get install -y python-pip python-dev
RUN pip install --upgrade --user awscli
RUN ln -s ~/.local/bin/aws /usr/bin/aws

## Setting the AWS region for the Node SDK
ENV AWS_REGION us-east-1

## Setting up work dir and entrypoint
WORKDIR /app
ENTRYPOINT /bin/bash
