import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { getGrpcServer, startGrpcServer } from './grpc'
import { ProtoGrpcType } from '../proto/chat'
import path from 'path'
import logInterceptor from '../util/logInterceptor'
import { chatController } from '../DI'


const PROTO_FILE = path.resolve(__dirname, '../proto/chat.proto')
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

  const chatProto = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
  startGrpcServer()
  const server = getGrpcServer()

  server.addService(
    chatProto.chat.ChatService.service,
    {
      createMessage: logInterceptor(chatController.createMessage),
      updateMessage: logInterceptor(chatController.updateMessage),
      deleteMessage: logInterceptor(chatController.deleteMessage),
      findMessageByUser: logInterceptor(chatController.findMessageByUser),
      findMessageById: logInterceptor(chatController.findMessageById),
    }
  )

}


export default grpcConnect