#!/bin/bash

docker pull training4developers/node-mongo

docker run -i -t \
	-p 49160:3000 -p 49161:27017 \
	-v `pwd`/:/opt/app \
	training4developers/node-mongo
