// Original file: src/proto/payment.proto


// Original file: src/proto/payment.proto

export const _payment_PaymentEnum_Status = {
  initiated: 0,
  successful: 1,
  failed: 2,
} as const;

export type _payment_PaymentEnum_Status =
  | 'initiated'
  | 0
  | 'successful'
  | 1
  | 'failed'
  | 2

export type _payment_PaymentEnum_Status__Output = typeof _payment_PaymentEnum_Status[keyof typeof _payment_PaymentEnum_Status]

export interface PaymentEnum {
}

export interface PaymentEnum__Output {
}
