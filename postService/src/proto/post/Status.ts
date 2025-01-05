// Original file: src/proto/post.proto

export const Status = {
  active: 0,
  deleted: 1,
  blocked: 2,
} as const;

export type Status =
  | 'active'
  | 0
  | 'deleted'
  | 1
  | 'blocked'
  | 2

export type Status__Output = typeof Status[keyof typeof Status]
