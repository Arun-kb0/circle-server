// Original file: src/proto/payment.proto


// Original file: src/proto/payment.proto

export const _payment_SubscriptionEnum_Plan = {
  monthly: 0,
  yearly: 1,
  lifetime: 2,
} as const;

export type _payment_SubscriptionEnum_Plan =
  | 'monthly'
  | 0
  | 'yearly'
  | 1
  | 'lifetime'
  | 2

export type _payment_SubscriptionEnum_Plan__Output = typeof _payment_SubscriptionEnum_Plan[keyof typeof _payment_SubscriptionEnum_Plan]

// Original file: src/proto/payment.proto

export const _payment_SubscriptionEnum_Status = {
  inactive: 0,
  active: 1,
  cancelled: 2,
} as const;

export type _payment_SubscriptionEnum_Status =
  | 'inactive'
  | 0
  | 'active'
  | 1
  | 'cancelled'
  | 2

export type _payment_SubscriptionEnum_Status__Output = typeof _payment_SubscriptionEnum_Status[keyof typeof _payment_SubscriptionEnum_Status]

export interface SubscriptionEnum {
}

export interface SubscriptionEnum__Output {
}
