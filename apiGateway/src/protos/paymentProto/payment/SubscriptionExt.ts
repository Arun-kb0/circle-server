// Original file: src/proto/payment.proto

import type { _payment_SubscriptionEnum_Plan, _payment_SubscriptionEnum_Plan__Output } from '../payment/SubscriptionEnum';
import type { _payment_SubscriptionEnum_Status, _payment_SubscriptionEnum_Status__Output } from '../payment/SubscriptionEnum';

export interface SubscriptionExt {
  '_id'?: (string);
  'subscriberUserId'?: (string);
  'subscriberToUserId'?: (string);
  'plan'?: (_payment_SubscriptionEnum_Plan);
  'status'?: (_payment_SubscriptionEnum_Status);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'merchantTransactionId'?: (string);
  'subscriberUserName'?: (string);
  'subscriberUserImage'?: (string);
  'subscriberToUserName'?: (string);
  'subscriberToUserImage'?: (string);
}

export interface SubscriptionExt__Output {
  '_id'?: (string);
  'subscriberUserId'?: (string);
  'subscriberToUserId'?: (string);
  'plan'?: (_payment_SubscriptionEnum_Plan__Output);
  'status'?: (_payment_SubscriptionEnum_Status__Output);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'merchantTransactionId'?: (string);
  'subscriberUserName'?: (string);
  'subscriberUserImage'?: (string);
  'subscriberToUserName'?: (string);
  'subscriberToUserImage'?: (string);
}
