// Original file: src/proto/payment.proto


// Original file: src/proto/payment.proto

export const _payment_TransactionEnums_Status = {
  pending: 0,
  completed: 1,
  failed: 2,
} as const;

export type _payment_TransactionEnums_Status =
  | 'pending'
  | 0
  | 'completed'
  | 1
  | 'failed'
  | 2

export type _payment_TransactionEnums_Status__Output = typeof _payment_TransactionEnums_Status[keyof typeof _payment_TransactionEnums_Status]

// Original file: src/proto/payment.proto

export const _payment_TransactionEnums_Type = {
  credit: 0,
  debit: 1,
} as const;

export type _payment_TransactionEnums_Type =
  | 'credit'
  | 0
  | 'debit'
  | 1

export type _payment_TransactionEnums_Type__Output = typeof _payment_TransactionEnums_Type[keyof typeof _payment_TransactionEnums_Type]

export interface TransactionEnums {
}

export interface TransactionEnums__Output {
}
