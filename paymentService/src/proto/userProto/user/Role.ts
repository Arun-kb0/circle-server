// Original file: src/proto/user.proto

export const Role = {
  user: 0,
  admin: 1,
} as const;

export type Role =
  | 'user'
  | 0
  | 'admin'
  | 1

export type Role__Output = typeof Role[keyof typeof Role]
