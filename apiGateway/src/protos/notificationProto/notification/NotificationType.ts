// Original file: src/proto/notification.proto

export const NotificationType = {
  call: 0,
  message: 1,
  follow: 2,
  like: 3,
  comment: 4,
  replay: 5,
} as const;

export type NotificationType =
  | 'call'
  | 0
  | 'message'
  | 1
  | 'follow'
  | 2
  | 'like'
  | 3
  | 'comment'
  | 4
  | 'replay'
  | 5

export type NotificationType__Output = typeof NotificationType[keyof typeof NotificationType]
