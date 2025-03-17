import path from "path";
import getPackageDef from "../util/getPackageDef";
import * as grpc from '@grpc/grpc-js'
import { ProtoGrpcType } from '../protos/notificationProto/notification'
import { NotificationServiceClient } from '../protos/notificationProto/notification/NotificationService'

const PROTO_PATH = path.join(__dirname, '..', 'protos', 'notificationProto', 'notification.proto')
const HOST = process.env.NOTIFICATION_SERVICE_HOST || 'docker.host.internal'
const PORT = process.env.NOTIFICATION_SERVICE_PORT || 50056
const IP_ADDRESS = `${HOST}:${PORT}`
console.log('user service ip  = ', IP_ADDRESS)

class NotificationGrpcClient {
  private static instance: NotificationServiceClient | null = null

  static getClient(): NotificationServiceClient {
    if (!NotificationGrpcClient.instance) {

      const packageDef = getPackageDef(PROTO_PATH)
      const notificationProto = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
      NotificationGrpcClient.instance = new notificationProto.notification.NotificationService(
        IP_ADDRESS,
        grpc.credentials.createInsecure()
      )
    }
    return NotificationGrpcClient.instance
  }

}

export default NotificationGrpcClient