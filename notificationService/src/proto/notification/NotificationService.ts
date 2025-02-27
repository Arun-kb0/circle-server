// Original file: src/proto/notification.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { SendNotificationRequest as _notification_SendNotificationRequest, SendNotificationRequest__Output as _notification_SendNotificationRequest__Output } from '../notification/SendNotificationRequest';
import type { SendNotificationResponse as _notification_SendNotificationResponse, SendNotificationResponse__Output as _notification_SendNotificationResponse__Output } from '../notification/SendNotificationResponse';

export interface NotificationServiceClient extends grpc.Client {
  SendNotification(argument: _notification_SendNotificationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notification_SendNotificationResponse__Output>): grpc.ClientUnaryCall;
  SendNotification(argument: _notification_SendNotificationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notification_SendNotificationResponse__Output>): grpc.ClientUnaryCall;
  SendNotification(argument: _notification_SendNotificationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notification_SendNotificationResponse__Output>): grpc.ClientUnaryCall;
  SendNotification(argument: _notification_SendNotificationRequest, callback: grpc.requestCallback<_notification_SendNotificationResponse__Output>): grpc.ClientUnaryCall;
  sendNotification(argument: _notification_SendNotificationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notification_SendNotificationResponse__Output>): grpc.ClientUnaryCall;
  sendNotification(argument: _notification_SendNotificationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notification_SendNotificationResponse__Output>): grpc.ClientUnaryCall;
  sendNotification(argument: _notification_SendNotificationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notification_SendNotificationResponse__Output>): grpc.ClientUnaryCall;
  sendNotification(argument: _notification_SendNotificationRequest, callback: grpc.requestCallback<_notification_SendNotificationResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface NotificationServiceHandlers extends grpc.UntypedServiceImplementation {
  SendNotification: grpc.handleUnaryCall<_notification_SendNotificationRequest__Output, _notification_SendNotificationResponse>;
  
}

export interface NotificationServiceDefinition extends grpc.ServiceDefinition {
  SendNotification: MethodDefinition<_notification_SendNotificationRequest, _notification_SendNotificationResponse, _notification_SendNotificationRequest__Output, _notification_SendNotificationResponse__Output>
}
