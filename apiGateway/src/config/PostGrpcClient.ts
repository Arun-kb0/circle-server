import path from "path";
import getPackageDef from "../util/getPackageDef";
import * as grpc from '@grpc/grpc-js'
import { ProtoGrpcType } from '../protos/postProto/post'
import { PostServiceClient } from "../protos/postProto/post/PostService";

const PROTO_PATH = path.join(__dirname, '..', 'protos', 'postProto', 'post.proto')
const PORT = process.env.POST_SERVICE_PORT || 50053
const HOST = process.env.POST_SERVICE_HOST || 'host.docker.internal'
const IP_ADDRESS = `${HOST}:${PORT}`

class PostGrpcClient {
  private static instance: PostServiceClient | null = null

  static getClient(): PostServiceClient {
    if (!PostGrpcClient.instance) {
      const packageDef = getPackageDef(PROTO_PATH)
      const authProto = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
      PostGrpcClient.instance = new authProto.post.PostService(
        IP_ADDRESS,
        grpc.credentials.createInsecure()
      )
    }
    return PostGrpcClient.instance
  }

}

export default PostGrpcClient