import * as grpc from '@grpc/grpc-js'
import { ReadNotificationsRequest__Output } from '../proto/notification/ReadNotificationsRequest'
import { ReadNotificationsResponse } from '../proto/notification/ReadNotificationsResponse'
import { GetNotificationsRequest__Output } from '../proto/notification/GetNotificationsRequest'
import { GetNotificationsResponse } from '../proto/notification/GetNotificationsResponse'

export type ReadNotificationsHandler = grpc.handleUnaryCall<ReadNotificationsRequest__Output, ReadNotificationsResponse>
export type GetNotificationsHandler = grpc.handleUnaryCall<GetNotificationsRequest__Output, GetNotificationsResponse>

interface INotificationController {
  getNotifications: GetNotificationsHandler,
  readNotifications: ReadNotificationsHandler 
}

export default INotificationController