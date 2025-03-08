// Original file: src/proto/payment.proto

import type { Wallet as _payment_Wallet, Wallet__Output as _payment_Wallet__Output } from '../payment/Wallet';
import type { Subscription as _payment_Subscription, Subscription__Output as _payment_Subscription__Output } from '../payment/Subscription';

export interface SubscribeWithWalletResponse {
  'wallet'?: (_payment_Wallet | null);
  'subscription'?: (_payment_Subscription | null);
}

export interface SubscribeWithWalletResponse__Output {
  'wallet'?: (_payment_Wallet__Output);
  'subscription'?: (_payment_Subscription__Output);
}
