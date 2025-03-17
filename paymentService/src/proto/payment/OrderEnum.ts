// Original file: src/proto/payment.proto


// Original file: src/proto/payment.proto

export const _payment_OrderEnum_OrderType = {
  user_subscription: 0,
  advertisement: 1,
} as const;

export type _payment_OrderEnum_OrderType =
  | 'user_subscription'
  | 0
  | 'advertisement'
  | 1

export type _payment_OrderEnum_OrderType__Output = typeof _payment_OrderEnum_OrderType[keyof typeof _payment_OrderEnum_OrderType]

// Original file: src/proto/payment.proto

export const _payment_OrderEnum_State = {
  pending: 0,
  completed: 1,
  failed: 2,
} as const;

export type _payment_OrderEnum_State =
  | 'pending'
  | 0
  | 'completed'
  | 1
  | 'failed'
  | 2

export type _payment_OrderEnum_State__Output = typeof _payment_OrderEnum_State[keyof typeof _payment_OrderEnum_State]

// Original file: src/proto/payment.proto

export const _payment_OrderEnum_UserSubscriptionDuration = {
  monthly: 0,
  yearly: 1,
  lifetime: 2,
} as const;

export type _payment_OrderEnum_UserSubscriptionDuration =
  | 'monthly'
  | 0
  | 'yearly'
  | 1
  | 'lifetime'
  | 2

export type _payment_OrderEnum_UserSubscriptionDuration__Output = typeof _payment_OrderEnum_UserSubscriptionDuration[keyof typeof _payment_OrderEnum_UserSubscriptionDuration]

export interface OrderEnum {
}

export interface OrderEnum__Output {
}
