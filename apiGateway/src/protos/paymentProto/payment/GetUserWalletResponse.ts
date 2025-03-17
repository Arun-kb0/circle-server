// Original file: src/proto/payment.proto

import type { Wallet as _payment_Wallet, Wallet__Output as _payment_Wallet__Output } from '../payment/Wallet';

export interface GetUserWalletResponse {
  'wallet'?: (_payment_Wallet | null);
}

export interface GetUserWalletResponse__Output {
  'wallet'?: (_payment_Wallet__Output);
}
