// Original file: src/proto/payment.proto

import type { CreateStatusOption as _payment_CreateStatusOption, CreateStatusOption__Output as _payment_CreateStatusOption__Output } from '../payment/CreateStatusOption';

export interface CreateOrderStatusOptionResponse {
  'transactionId'?: (string);
  'option'?: (_payment_CreateStatusOption | null);
}

export interface CreateOrderStatusOptionResponse__Output {
  'transactionId'?: (string);
  'option'?: (_payment_CreateStatusOption__Output);
}
