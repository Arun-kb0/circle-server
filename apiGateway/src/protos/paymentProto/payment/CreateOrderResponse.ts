// Original file: src/proto/payment.proto

import type { Order as _payment_Order, Order__Output as _payment_Order__Output } from '../payment/Order';

export interface CreateOrderResponse {
  'order'?: (_payment_Order | null);
}

export interface CreateOrderResponse__Output {
  'order'?: (_payment_Order__Output);
}
