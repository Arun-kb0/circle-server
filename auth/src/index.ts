import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { getGrpcServer, startGrpcServer } from './util/grpc'
import { ProtoGrpcType } from './proto/auth'
import { userController } from './util/DI'
import { healthCheck } from './util/healthCheck'
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://arun11kb:o7DNRY2oTPIytb7D@cluster0.nlbom.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/users'
const HTTP_PORT = process.env.HEALTH_CHECK_PORT || 8081
const PROTO_FILE = path.resolve(__dirname, './proto/auth.proto')

const packageDef = protoLoader.loadSync(
  PROTO_FILE,
  {
    keepCase: true,
    longs: String,
    defaults: true,
    oneofs: true
  }
)

const authProto = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
startGrpcServer()
const server = getGrpcServer()


server.addService(
  authProto.authType.AuthService.service,
  {
    login: userController.login
  }
)


mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('users mongodb connected ')
    healthCheck.listen(HTTP_PORT, () => {
      console.log(`HTTP health check server running on port ${HTTP_PORT}`);
    })
  })
  .catch((err) => console.log(err))