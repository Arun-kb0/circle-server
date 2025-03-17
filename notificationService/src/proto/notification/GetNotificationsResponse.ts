// Original file: src/proto/notification.proto

import type { Notification as _notification_Notification, Notification__Output as _notification_Notification__Output } from '../notification/Notification';

export interface GetNotificationsResponse {
  'numberOfPages'?: (number);
  'currentPage'?: (number);
  'notifications'?: (_notification_Notification)[];
}

export interface GetNotificationsResponse__Output {
  'numberOfPages'?: (number);
  'currentPage'?: (number);
  'notifications'?: (_notification_Notification__Output)[];
}
