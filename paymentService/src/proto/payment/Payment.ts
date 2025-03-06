// Original file: src/proto/payment.proto

import type { _payment_PaymentEnum_Status, _payment_PaymentEnum_Status__Output } from '../payment/PaymentEnum';

export interface Payment {
  '_id'?: (string);
  'paymentId'?: (string);
  'orderId'?: (string);
  'method'?: (string);
  'amount'?: (number);
  'currency'?: (string);
  'status'?: (_payment_PaymentEnum_Status);
  'transactionDate'?: (string);
  'createdAt'?: (string);
  'updatedAt'?: (string);
}

export interface Payment__Output {
  '_id'?: (string);
  'paymentId'?: (string);
  'orderId'?: (string);
  'method'?: (string);
  'amount'?: (number);
  'currency'?: (string);
  'status'?: (_payment_PaymentEnum_Status__Output);
  'transactionDate'?: (string);
  'createdAt'?: (string);
  'updatedAt'?: (string);
}
