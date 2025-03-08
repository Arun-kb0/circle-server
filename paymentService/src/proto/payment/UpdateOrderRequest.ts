// Original file: src/proto/payment.proto

import type { Order as _payment_Order, Order__Output as _payment_Order__Output } from '../payment/Order';

export interface UpdateOrderRequest {
  'orderId'?: (string);
  'order'?: (_payment_Order | null);
}

export interface UpdateOrderRequest__Output {
  'orderId'?: (string);
  'order'?: (_payment_Order__Output);
}
