import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { getGrpcServer, startGrpcServer } from '../config/grpc'
import { ProtoGrpcType } from '../proto/auth'
import { userController } from '../DI'


const PROTO_FILE = path.resolve(__dirname, '../proto/auth.proto')
const packageDef = protoLoader.loadSync(
  PROTO_FILE,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
)


const grpcConnect = () => {

  const authProto = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
  startGrpcServer()
  const server = getGrpcServer()
  
  server.addService(
    authProto.authType.AuthService.service,
    {
      login: userController.login,
      signUp: userController.signup,
      logout: userController.logout,
      refresh: userController.refresh,
      jwtVerify: userController.jwtVerify,
      adminSignUp : userController.adminSignup,
      adminLogin : userController.adminLogin
    }
  )

}

export default grpcConnect
