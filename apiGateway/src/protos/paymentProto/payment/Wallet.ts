// Original file: src/proto/payment.proto


export interface Wallet {
  '_id'?: (string);
  'userId'?: (string);
  'balance'?: (number | string);
  'currency'?: (string);
  'createdAt'?: (string);
  'updatedAt'?: (string);
}

export interface Wallet__Output {
  '_id'?: (string);
  'userId'?: (string);
  'balance'?: (number);
  'currency'?: (string);
  'createdAt'?: (string);
  'updatedAt'?: (string);
}
