import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { getGrpcServer, startGrpcServer } from '../config/grpc'
import {
  ProtoGrpcType

} from '../proto/user'
import path from 'path'
import { userController } from '../DI'


const PROTO_FILE = path.resolve(__dirname, '../proto/user.proto')
const packageDef = protoLoader.loadSync(
  PROTO_FILE,
  {
    keepCase: true,
    longs: String,
    enums:String,
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
      getAllUsers: userController.getAllUsers,
      getUser: userController.getUser,
      updateUser: userController.updateUser,
      blockUser: userController.blockUser,
      unblockUser: userController.unblockUser
    }
  )

}


export default grpcConnect