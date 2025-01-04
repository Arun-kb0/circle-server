import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { getGrpcServer, startGrpcServer } from '../config/grpc'
import { ProtoGrpcType } from '../proto/auth'
import { userController } from '../DI'
import logInterceptor from '../util/logInterceptor'

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
      signUp: logInterceptor(userController.signup),
      verifyEmail: logInterceptor(userController.verifyEmail),
      resendOtp: logInterceptor(userController.resendOtp),
      resetPassword: logInterceptor(userController.resetPassword),
      resetPwdVerifyOtp: logInterceptor(userController.resetPwdVerifyOtp),

      googleOauth : logInterceptor(userController.googleOauth),

      login: logInterceptor(userController.login),
      logout: logInterceptor(userController.logout),
      refresh: logInterceptor(userController.refresh),

      adminSignUp: logInterceptor(userController.adminSignup),
      adminLogin : logInterceptor(userController.adminLogin)
    }
  )

}

export default grpcConnect
