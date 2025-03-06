// Original file: src/proto/payment.proto

import type { _payment_OrderEnum_OrderType, _payment_OrderEnum_OrderType__Output } from '../payment/OrderEnum';
import type { _payment_OrderEnum_UserSubscriptionDuration, _payment_OrderEnum_UserSubscriptionDuration__Output } from '../payment/OrderEnum';
import type { _payment_OrderEnum_State, _payment_OrderEnum_State__Output } from '../payment/OrderEnum';

export interface Order {
  '_id'?: (string);
  'orderId'?: (string);
  'userId'?: (string);
  'amount'?: (number);
  'orderType'?: (_payment_OrderEnum_OrderType);
  'userSubscriptionDuration'?: (_payment_OrderEnum_UserSubscriptionDuration);
  'state'?: (_payment_OrderEnum_State);
  'createdAt'?: (string);
  'updatedAt'?: (string);
}

export interface Order__Output {
  '_id'?: (string);
  'orderId'?: (string);
  'userId'?: (string);
  'amount'?: (number);
  'orderType'?: (_payment_OrderEnum_OrderType__Output);
  'userSubscriptionDuration'?: (_payment_OrderEnum_UserSubscriptionDuration__Output);
  'state'?: (_payment_OrderEnum_State__Output);
  'createdAt'?: (string);
  'updatedAt'?: (string);
}
