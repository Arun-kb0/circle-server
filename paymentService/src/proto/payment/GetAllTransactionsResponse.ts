// Original file: src/proto/payment.proto

import type { TransactionAdmin as _payment_TransactionAdmin, TransactionAdmin__Output as _payment_TransactionAdmin__Output } from '../payment/TransactionAdmin';

export interface GetAllTransactionsResponse {
  'transactions'?: (_payment_TransactionAdmin)[];
  'numberOfPages'?: (number);
  'currentPage'?: (number);
}

export interface GetAllTransactionsResponse__Output {
  'transactions'?: (_payment_TransactionAdmin__Output)[];
  'numberOfPages'?: (number);
  'currentPage'?: (number);
}
