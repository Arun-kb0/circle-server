// Original file: src/proto/payment.proto

import type { Order as _payment_Order, Order__Output as _payment_Order__Output } from '../payment/Order';

export interface UpdateOrderResponse {
  'order'?: (_payment_Order | null);
}

export interface UpdateOrderResponse__Output {
  'order'?: (_payment_Order__Output);
}
