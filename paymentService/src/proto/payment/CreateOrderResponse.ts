// Original file: src/proto/payment.proto

import type { CreateOrderOption as _payment_CreateOrderOption, CreateOrderOption__Output as _payment_CreateOrderOption__Output } from '../payment/CreateOrderOption';

export interface CreateOrderResponse {
  'option'?: (_payment_CreateOrderOption | null);
  'orderId'?: (string);
}

export interface CreateOrderResponse__Output {
  'option'?: (_payment_CreateOrderOption__Output);
  'orderId'?: (string);
}
