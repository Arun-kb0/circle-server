// Original file: src/proto/payment.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateOrderRequest as _payment_CreateOrderRequest, CreateOrderRequest__Output as _payment_CreateOrderRequest__Output } from '../payment/CreateOrderRequest';
import type { CreateOrderResponse as _payment_CreateOrderResponse, CreateOrderResponse__Output as _payment_CreateOrderResponse__Output } from '../payment/CreateOrderResponse';
import type { CreatePaymentRequest as _payment_CreatePaymentRequest, CreatePaymentRequest__Output as _payment_CreatePaymentRequest__Output } from '../payment/CreatePaymentRequest';
import type { CreatePaymentResponse as _payment_CreatePaymentResponse, CreatePaymentResponse__Output as _payment_CreatePaymentResponse__Output } from '../payment/CreatePaymentResponse';
import type { GetSubscriptionsRequest as _payment_GetSubscriptionsRequest, GetSubscriptionsRequest__Output as _payment_GetSubscriptionsRequest__Output } from '../payment/GetSubscriptionsRequest';
import type { GetSubscriptionsResponse as _payment_GetSubscriptionsResponse, GetSubscriptionsResponse__Output as _payment_GetSubscriptionsResponse__Output } from '../payment/GetSubscriptionsResponse';

export interface PaymentServiceClient extends grpc.Client {
  CreateOrder(argument: _payment_CreateOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  CreateOrder(argument: _payment_CreateOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_payment_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  CreateOrder(argument: _payment_CreateOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  CreateOrder(argument: _payment_CreateOrderRequest, callback: grpc.requestCallback<_payment_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _payment_CreateOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _payment_CreateOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_payment_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _payment_CreateOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _payment_CreateOrderRequest, callback: grpc.requestCallback<_payment_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  
  CreatePayment(argument: _payment_CreatePaymentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_CreatePaymentResponse__Output>): grpc.ClientUnaryCall;
  CreatePayment(argument: _payment_CreatePaymentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_payment_CreatePaymentResponse__Output>): grpc.ClientUnaryCall;
  CreatePayment(argument: _payment_CreatePaymentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_CreatePaymentResponse__Output>): grpc.ClientUnaryCall;
  CreatePayment(argument: _payment_CreatePaymentRequest, callback: grpc.requestCallback<_payment_CreatePaymentResponse__Output>): grpc.ClientUnaryCall;
  createPayment(argument: _payment_CreatePaymentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_CreatePaymentResponse__Output>): grpc.ClientUnaryCall;
  createPayment(argument: _payment_CreatePaymentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_payment_CreatePaymentResponse__Output>): grpc.ClientUnaryCall;
  createPayment(argument: _payment_CreatePaymentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_CreatePaymentResponse__Output>): grpc.ClientUnaryCall;
  createPayment(argument: _payment_CreatePaymentRequest, callback: grpc.requestCallback<_payment_CreatePaymentResponse__Output>): grpc.ClientUnaryCall;
  
  GetSubscriptions(argument: _payment_GetSubscriptionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_GetSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  GetSubscriptions(argument: _payment_GetSubscriptionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_payment_GetSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  GetSubscriptions(argument: _payment_GetSubscriptionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_GetSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  GetSubscriptions(argument: _payment_GetSubscriptionsRequest, callback: grpc.requestCallback<_payment_GetSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  getSubscriptions(argument: _payment_GetSubscriptionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_GetSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  getSubscriptions(argument: _payment_GetSubscriptionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_payment_GetSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  getSubscriptions(argument: _payment_GetSubscriptionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_GetSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  getSubscriptions(argument: _payment_GetSubscriptionsRequest, callback: grpc.requestCallback<_payment_GetSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface PaymentServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOrder: grpc.handleUnaryCall<_payment_CreateOrderRequest__Output, _payment_CreateOrderResponse>;
  
  CreatePayment: grpc.handleUnaryCall<_payment_CreatePaymentRequest__Output, _payment_CreatePaymentResponse>;
  
  GetSubscriptions: grpc.handleUnaryCall<_payment_GetSubscriptionsRequest__Output, _payment_GetSubscriptionsResponse>;
  
}

export interface PaymentServiceDefinition extends grpc.ServiceDefinition {
  CreateOrder: MethodDefinition<_payment_CreateOrderRequest, _payment_CreateOrderResponse, _payment_CreateOrderRequest__Output, _payment_CreateOrderResponse__Output>
  CreatePayment: MethodDefinition<_payment_CreatePaymentRequest, _payment_CreatePaymentResponse, _payment_CreatePaymentRequest__Output, _payment_CreatePaymentResponse__Output>
  GetSubscriptions: MethodDefinition<_payment_GetSubscriptionsRequest, _payment_GetSubscriptionsResponse, _payment_GetSubscriptionsRequest__Output, _payment_GetSubscriptionsResponse__Output>
}
