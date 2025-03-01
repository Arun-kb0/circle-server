// Original file: src/proto/notification.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetNotificationsRequest as _notification_GetNotificationsRequest, GetNotificationsRequest__Output as _notification_GetNotificationsRequest__Output } from '../notification/GetNotificationsRequest';
import type { GetNotificationsResponse as _notification_GetNotificationsResponse, GetNotificationsResponse__Output as _notification_GetNotificationsResponse__Output } from '../notification/GetNotificationsResponse';
import type { ReadNotificationsRequest as _notification_ReadNotificationsRequest, ReadNotificationsRequest__Output as _notification_ReadNotificationsRequest__Output } from '../notification/ReadNotificationsRequest';
import type { ReadNotificationsResponse as _notification_ReadNotificationsResponse, ReadNotificationsResponse__Output as _notification_ReadNotificationsResponse__Output } from '../notification/ReadNotificationsResponse';

export interface NotificationServiceClient extends grpc.Client {
  GetNotifications(argument: _notification_GetNotificationsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notification_GetNotificationsResponse__Output>): grpc.ClientUnaryCall;
  GetNotifications(argument: _notification_GetNotificationsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notification_GetNotificationsResponse__Output>): grpc.ClientUnaryCall;
  GetNotifications(argument: _notification_GetNotificationsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notification_GetNotificationsResponse__Output>): grpc.ClientUnaryCall;
  GetNotifications(argument: _notification_GetNotificationsRequest, callback: grpc.requestCallback<_notification_GetNotificationsResponse__Output>): grpc.ClientUnaryCall;
  getNotifications(argument: _notification_GetNotificationsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notification_GetNotificationsResponse__Output>): grpc.ClientUnaryCall;
  getNotifications(argument: _notification_GetNotificationsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notification_GetNotificationsResponse__Output>): grpc.ClientUnaryCall;
  getNotifications(argument: _notification_GetNotificationsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notification_GetNotificationsResponse__Output>): grpc.ClientUnaryCall;
  getNotifications(argument: _notification_GetNotificationsRequest, callback: grpc.requestCallback<_notification_GetNotificationsResponse__Output>): grpc.ClientUnaryCall;
  
  ReadNotifications(argument: _notification_ReadNotificationsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notification_ReadNotificationsResponse__Output>): grpc.ClientUnaryCall;
  ReadNotifications(argument: _notification_ReadNotificationsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notification_ReadNotificationsResponse__Output>): grpc.ClientUnaryCall;
  ReadNotifications(argument: _notification_ReadNotificationsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notification_ReadNotificationsResponse__Output>): grpc.ClientUnaryCall;
  ReadNotifications(argument: _notification_ReadNotificationsRequest, callback: grpc.requestCallback<_notification_ReadNotificationsResponse__Output>): grpc.ClientUnaryCall;
  readNotifications(argument: _notification_ReadNotificationsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notification_ReadNotificationsResponse__Output>): grpc.ClientUnaryCall;
  readNotifications(argument: _notification_ReadNotificationsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notification_ReadNotificationsResponse__Output>): grpc.ClientUnaryCall;
  readNotifications(argument: _notification_ReadNotificationsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notification_ReadNotificationsResponse__Output>): grpc.ClientUnaryCall;
  readNotifications(argument: _notification_ReadNotificationsRequest, callback: grpc.requestCallback<_notification_ReadNotificationsResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface NotificationServiceHandlers extends grpc.UntypedServiceImplementation {
  GetNotifications: grpc.handleUnaryCall<_notification_GetNotificationsRequest__Output, _notification_GetNotificationsResponse>;
  
  ReadNotifications: grpc.handleUnaryCall<_notification_ReadNotificationsRequest__Output, _notification_ReadNotificationsResponse>;
  
}

export interface NotificationServiceDefinition extends grpc.ServiceDefinition {
  GetNotifications: MethodDefinition<_notification_GetNotificationsRequest, _notification_GetNotificationsResponse, _notification_GetNotificationsRequest__Output, _notification_GetNotificationsResponse__Output>
  ReadNotifications: MethodDefinition<_notification_ReadNotificationsRequest, _notification_ReadNotificationsResponse, _notification_ReadNotificationsRequest__Output, _notification_ReadNotificationsResponse__Output>
}
