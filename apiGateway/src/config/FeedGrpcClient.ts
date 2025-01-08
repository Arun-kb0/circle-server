import path from "path";
import getPackageDef from "../util/getPackageDef";
import * as grpc from '@grpc/grpc-js'
import { ProtoGrpcType } from '../protos/feedProto/feed'
import { FeedServiceClient } from '../protos/feedProto/feed/FeedService'

const PROTO_PATH = path.join(__dirname, '..', 'protos', 'feedProto', 'feed.proto')
const HOST = process.env.FEED_SERVICE_HOST || 'host.docker.internal'
const PORT = process.env.FEED_SERVICE_PORT || 50054
const IP_ADDRESS = `${HOST}:${PORT}`

class FeedGrpcClient {
  private static instance: FeedServiceClient | null = null

  static getClient(): FeedServiceClient {
    if (!FeedGrpcClient.instance) {

      const packageDef = getPackageDef(PROTO_PATH)
      const feedProto = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
      FeedGrpcClient.instance = new feedProto.feed.FeedService(
        IP_ADDRESS,
        grpc.credentials.createInsecure()
      )
    }
    return FeedGrpcClient.instance
  }

}

export default FeedGrpcClient