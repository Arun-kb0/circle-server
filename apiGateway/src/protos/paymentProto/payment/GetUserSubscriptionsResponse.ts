// Original file: src/proto/payment.proto

import type { Subscription as _payment_Subscription, Subscription__Output as _payment_Subscription__Output } from '../payment/Subscription';

export interface GetUserSubscriptionsResponse {
  'subscriptions'?: (_payment_Subscription)[];
  'numberOfPages'?: (number);
  'currentPage'?: (number);
}

export interface GetUserSubscriptionsResponse__Output {
  'subscriptions'?: (_payment_Subscription__Output)[];
  'numberOfPages'?: (number);
  'currentPage'?: (number);
}
