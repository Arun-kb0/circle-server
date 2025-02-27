import * as grpc from '@grpc/grpc-js'
import { SendNotificationRequest__Output } from '../proto/notification/SendNotificationRequest'
import { SendNotificationResponse } from '../proto/notification/SendNotificationResponse'

export type SendNotificationHandler = grpc.handleUnaryCall<SendNotificationRequest__Output, SendNotificationResponse>

interface INotificationController {
  sendNotification: SendNotificationHandler 
}

export default INotificationController