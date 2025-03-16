// Original file: src/proto/payment.proto


export interface CreateUserSubscriptionPlanRequest {
  'monthly'?: (number);
  'yearly'?: (number);
  'lifetime'?: (number);
  'userId'?: (string);
}

export interface CreateUserSubscriptionPlanRequest__Output {
  'monthly'?: (number);
  'yearly'?: (number);
  'lifetime'?: (number);
  'userId'?: (string);
}
