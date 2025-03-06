// Original file: src/proto/payment.proto

import type { Subscription as _payment_Subscription, Subscription__Output as _payment_Subscription__Output } from '../payment/Subscription';

export interface GetSubscriptionsResponse {
  'subscriptions'?: (_payment_Subscription)[];
}

export interface GetSubscriptionsResponse__Output {
  'subscriptions'?: (_payment_Subscription__Output)[];
}
