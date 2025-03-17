// Original file: src/proto/payment.proto

import type { Subscription as _payment_Subscription, Subscription__Output as _payment_Subscription__Output } from '../payment/Subscription';

export interface CreateSubscriptionRequest {
  'subscription'?: (_payment_Subscription | null);
}

export interface CreateSubscriptionRequest__Output {
  'subscription'?: (_payment_Subscription__Output);
}
