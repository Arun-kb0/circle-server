import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { getGrpcServer, startGrpcServer } from '../config/grpc'
import { ProtoGrpcType } from '../proto/user'
import path from 'path'
import { followController, userController } from '../DI'
import logInterceptor from '../util/logInterceptor'


const PROTO_FILE = path.resolve(__dirname, '../proto/user.proto')
const packageDef = protoLoader.loadSync(
  PROTO_FILE,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  }
)

const grpcConnect = () => {

  const userProto = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
  startGrpcServer()
  const server = getGrpcServer()

  server.addService(
    userProto.user.UserService.service,
    {
      getAllUsers: logInterceptor(userController.getAllUsers),
      getUser: logInterceptor(userController.getUser),
      updateUser: logInterceptor(userController.updateUser),
      blockUser: logInterceptor(userController.blockUser),
      unblockUser: logInterceptor(userController.unblockUser),
      getMultipleUser: logInterceptor(userController.getMultipleUsers),

      getFollowing: logInterceptor(followController.getFollowing),
      getFollowers: logInterceptor(followController.getFollowers),
      getSuggestedPeople: logInterceptor(followController.getSuggestedPeople),
      followUser: logInterceptor(followController.followUser),
      unFollowUser: logInterceptor(followController.unFollowUser),

      usersCount : logInterceptor(userController.usersCount),
    }
  )
}


export default grpcConnect