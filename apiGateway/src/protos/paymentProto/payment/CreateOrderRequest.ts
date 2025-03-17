// Original file: src/proto/payment.proto

import type { _payment_OrderEnum_OrderType, _payment_OrderEnum_OrderType__Output } from '../payment/OrderEnum';

export interface CreateOrderRequest {
  'subscriberUserId'?: (string);
  'subscriberEmail'?: (string);
  'amount'?: (number);
  'orderType'?: (_payment_OrderEnum_OrderType);
}

export interface CreateOrderRequest__Output {
  'subscriberUserId'?: (string);
  'subscriberEmail'?: (string);
  'amount'?: (number);
  'orderType'?: (_payment_OrderEnum_OrderType__Output);
}
