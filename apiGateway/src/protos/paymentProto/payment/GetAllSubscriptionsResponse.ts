// Original file: src/proto/payment.proto

import type { SubscriptionExt as _payment_SubscriptionExt, SubscriptionExt__Output as _payment_SubscriptionExt__Output } from '../payment/SubscriptionExt';

export interface GetAllSubscriptionsResponse {
  'subscriptions'?: (_payment_SubscriptionExt)[];
  'numberOfPages'?: (number);
  'currentPage'?: (number);
}

export interface GetAllSubscriptionsResponse__Output {
  'subscriptions'?: (_payment_SubscriptionExt__Output)[];
  'numberOfPages'?: (number);
  'currentPage'?: (number);
}
