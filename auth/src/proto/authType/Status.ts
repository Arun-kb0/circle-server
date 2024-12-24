// Original file: src/proto/auth.proto

export const Status = {
  active: 0,
  blocked: 1,
  deleted: 2,
} as const;

export type Status =
  | 'active'
  | 0
  | 'blocked'
  | 1
  | 'deleted'
  | 2

export type Status__Output = typeof Status[keyof typeof Status]
