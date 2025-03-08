// Original file: src/proto/payment.proto

import type { Order as _payment_Order, Order__Output as _payment_Order__Output } from '../payment/Order';
import type { Subscription as _payment_Subscription, Subscription__Output as _payment_Subscription__Output } from '../payment/Subscription';

export interface SubscribeWithWalletRequest {
  'order'?: (_payment_Order | null);
  'subscription'?: (_payment_Subscription | null);
}

export interface SubscribeWithWalletRequest__Output {
  'order'?: (_payment_Order__Output);
  'subscription'?: (_payment_Subscription__Output);
}
