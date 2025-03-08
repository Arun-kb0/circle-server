// Original file: src/proto/payment.proto

import type { _payment_TransactionEnums_Type, _payment_TransactionEnums_Type__Output } from '../payment/TransactionEnums';
import type { _payment_TransactionEnums_Status, _payment_TransactionEnums_Status__Output } from '../payment/TransactionEnums';

export interface Transaction {
  '_id'?: (string);
  'userId'?: (string);
  'type'?: (_payment_TransactionEnums_Type);
  'amount'?: (number);
  'currency'?: (string);
  'status'?: (_payment_TransactionEnums_Status);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'senderId'?: (string);
  'receiverId'?: (string);
}

export interface Transaction__Output {
  '_id'?: (string);
  'userId'?: (string);
  'type'?: (_payment_TransactionEnums_Type__Output);
  'amount'?: (number);
  'currency'?: (string);
  'status'?: (_payment_TransactionEnums_Status__Output);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'senderId'?: (string);
  'receiverId'?: (string);
}
