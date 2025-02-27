// Original file: src/proto/notification.proto

import type { NotificationType as _notification_NotificationType, NotificationType__Output as _notification_NotificationType__Output } from '../notification/NotificationType';

export interface Notification {
  '_id'?: (string);
  'authorId'?: (string);
  'receiverId'?: (string);
  'type'?: (_notification_NotificationType);
  'message'?: (string);
  'read'?: (boolean);
  'createdAt'?: (string);
  'updatedAt'?: (string);
}

export interface Notification__Output {
  '_id'?: (string);
  'authorId'?: (string);
  'receiverId'?: (string);
  'type'?: (_notification_NotificationType__Output);
  'message'?: (string);
  'read'?: (boolean);
  'createdAt'?: (string);
  'updatedAt'?: (string);
}
