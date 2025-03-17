// Original file: src/proto/payment.proto

import type { TransactionExt as _payment_TransactionExt, TransactionExt__Output as _payment_TransactionExt__Output } from '../payment/TransactionExt';

export interface GetUserTransactionsResponse {
  'transactions'?: (_payment_TransactionExt)[];
  'numberOfPages'?: (number);
  'currentPage'?: (number);
}

export interface GetUserTransactionsResponse__Output {
  'transactions'?: (_payment_TransactionExt__Output)[];
  'numberOfPages'?: (number);
  'currentPage'?: (number);
}
