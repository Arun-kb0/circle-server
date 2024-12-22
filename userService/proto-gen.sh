#!/bin/bash

rm -rf ./src/proto/user 

npx proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=./src/proto/ ./src/proto/*.proto


protoc -I=./src/proto ./src/proto/*.proto \
  --js_out=import_style=commonjs:./src/proto \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/proto