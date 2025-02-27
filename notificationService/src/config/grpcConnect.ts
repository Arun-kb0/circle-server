import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { getGrpcServer, startGrpcServer } from './grpc'
import { ProtoGrpcType } from '../proto/notification'
import path from 'path'
import logInterceptor from '../util/logInterceptor'
import { notificationController } from '../DI'
// import { feedController } from '../DI'


const PROTO_FILE = path.resolve(__dirname, '../proto/notification.proto')
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

  const notificationProto = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
  startGrpcServer()
  const server = getGrpcServer()

  server.addService(
    notificationProto.notification.NotificationService.service,
    {
      // ! lisen for notification from seperate module and call this from index ts
      sendNotification: logInterceptor(notificationController.sendNotification)
    }
  )

}


export default grpcConnect