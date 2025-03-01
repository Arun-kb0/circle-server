import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { NotificationServiceClient as _notification_NotificationServiceClient, NotificationServiceDefinition as _notification_NotificationServiceDefinition } from './notification/NotificationService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  notification: {
    GetNotificationsRequest: MessageTypeDefinition
    GetNotificationsResponse: MessageTypeDefinition
    Notification: MessageTypeDefinition
    NotificationService: SubtypeConstructor<typeof grpc.Client, _notification_NotificationServiceClient> & { service: _notification_NotificationServiceDefinition }
    NotificationType: EnumTypeDefinition
    ReadNotificationsRequest: MessageTypeDefinition
    ReadNotificationsResponse: MessageTypeDefinition
  }
}

