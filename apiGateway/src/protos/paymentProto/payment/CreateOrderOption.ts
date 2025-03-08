// Original file: src/proto/payment.proto


export interface _payment_CreateOrderOption_Data {
  'request'?: (string);
}

export interface _payment_CreateOrderOption_Data__Output {
  'request'?: (string);
}

export interface CreateOrderOption {
  'method'?: (string);
  'url'?: (string);
  'headers'?: ({[key: string]: string});
  'data'?: (_payment_CreateOrderOption_Data | null);
}

export interface CreateOrderOption__Output {
  'method'?: (string);
  'url'?: (string);
  'headers'?: ({[key: string]: string});
  'data'?: (_payment_CreateOrderOption_Data__Output);
}
