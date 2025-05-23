import path from "path";
import getPackageDef from "../util/getPackageDef";
import * as grpc from '@grpc/grpc-js'
import { ProtoGrpcType } from '../protos/userProto/user'
import { UserServiceClient } from '../protos/userProto/user/UserService'

const PROTO_PATH = path.join(__dirname, '..', 'protos', 'userProto', 'user.proto')
const HOST = process.env.USER_SERVICE_HOST || 'localhost'
const PORT = process.env.USER_SERVICE_PORT || 50052
const IP_ADDRESS = `${HOST}:${PORT}`
console.log('user service ip  = ', IP_ADDRESS)

class UserGrpcClient {
  private static instance: UserServiceClient | null = null

  static getClient(): UserServiceClient {
    if (!UserGrpcClient.instance) {

      const packageDef = getPackageDef(PROTO_PATH)
      const userProto = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
      UserGrpcClient.instance = new userProto.user.UserService(
        IP_ADDRESS,
        grpc.credentials.createInsecure()
      )
    }
    return UserGrpcClient.instance
  }

}

export default UserGrpcClient