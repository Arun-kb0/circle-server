import path from "path";
import getPackageDef from "../util/getPackageDef";
import * as grpc from '@grpc/grpc-js'
import { ProtoGrpcType } from '../protos/chatProto/chat'
import { ChatServiceClient } from "../protos/chatProto/chat/ChatService";


const PROTO_PATH = path.join(__dirname, '..', 'protos', 'chatProto', 'chat.proto')
const PORT = process.env.CHAT_SERVICE_PORT || 50055
const HOST = process.env.CHAT_SERVICE_HOST || 'host.docker.internal'
const IP_ADDRESS = `${HOST}:${PORT}`

console.log('chat service')
console.log(PROTO_PATH)
console.log(IP_ADDRESS)

class ChatGrpcClient {
  private static instance: ChatServiceClient | null = null

  static getClient(): ChatServiceClient {
    if (!ChatGrpcClient.instance) {
      const packageDef = getPackageDef(PROTO_PATH)
      const chatProto = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
      ChatGrpcClient.instance = new chatProto.chat.ChatService(
        IP_ADDRESS,
        grpc.credentials.createInsecure()
      )
    }
    return ChatGrpcClient.instance
  }

  static IsClientConnected() {
    const state = this.instance?.getChannel().getConnectivityState(false)
    console.log("IsClientConnected ")
    console.log(state)
  }

}

export default ChatGrpcClient