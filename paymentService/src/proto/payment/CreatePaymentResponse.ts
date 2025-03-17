// Original file: src/proto/payment.proto

import type { Payment as _payment_Payment, Payment__Output as _payment_Payment__Output } from '../payment/Payment';

export interface CreatePaymentResponse {
  'paymentData'?: (_payment_Payment | null);
}

export interface CreatePaymentResponse__Output {
  'paymentData'?: (_payment_Payment__Output);
}
