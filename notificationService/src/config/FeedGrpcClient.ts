import path from "path";
import getPackageDef from "../util/getPackageDef";
import * as grpc from '@grpc/grpc-js'
import { ProtoGrpcType } from '../proto/feedProto/feed'
import { FeedServiceClient } from '../proto/feedProto/feed/FeedService'

const PROTO_PATH = path.join(__dirname, '..', 'proto', 'feedProto', 'feed.proto')
const HOST = process.env.FEED_SERVICE_HOST || 'host.docker.internal'
const PORT = process.env.FEED_SERVICE_PORT || 50054
const IP_ADDRESS = `${HOST}:${PORT}`
console.log("feed service ip = ",IP_ADDRESS)

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