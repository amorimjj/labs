FROM ubuntu:16.04

RUN \
    apt-get update && \
    apt-get install -y npm nodejs && \
	npm install -g mocha && \
    ln -sf /usr/bin/nodejs /usr/bin/node
