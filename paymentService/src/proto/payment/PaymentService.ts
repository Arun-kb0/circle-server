// Original file: src/proto/payment.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateOrderRequest as _payment_CreateOrderRequest, CreateOrderRequest__Output as _payment_CreateOrderRequest__Output } from '../payment/CreateOrderRequest';
import type { CreateOrderResponse as _payment_CreateOrderResponse, CreateOrderResponse__Output as _payment_CreateOrderResponse__Output } from '../payment/CreateOrderResponse';
import type { CreateOrderStatusOptionRequest as _payment_CreateOrderStatusOptionRequest, CreateOrderStatusOptionRequest__Output as _payment_CreateOrderStatusOptionRequest__Output } from '../payment/CreateOrderStatusOptionRequest';
import type { CreateOrderStatusOptionResponse as _payment_CreateOrderStatusOptionResponse, CreateOrderStatusOptionResponse__Output as _payment_CreateOrderStatusOptionResponse__Output } from '../payment/CreateOrderStatusOptionResponse';
import type { CreatePaymentRequest as _payment_CreatePaymentRequest, CreatePaymentRequest__Output as _payment_CreatePaymentRequest__Output } from '../payment/CreatePaymentRequest';
import type { CreatePaymentResponse as _payment_CreatePaymentResponse, CreatePaymentResponse__Output as _payment_CreatePaymentResponse__Output } from '../payment/CreatePaymentResponse';
import type { CreateSubscriptionRequest as _payment_CreateSubscriptionRequest, CreateSubscriptionRequest__Output as _payment_CreateSubscriptionRequest__Output } from '../payment/CreateSubscriptionRequest';
import type { CreateSubscriptionResponse as _payment_CreateSubscriptionResponse, CreateSubscriptionResponse__Output as _payment_CreateSubscriptionResponse__Output } from '../payment/CreateSubscriptionResponse';
import type { GetUserSubscriptionsRequest as _payment_GetUserSubscriptionsRequest, GetUserSubscriptionsRequest__Output as _payment_GetUserSubscriptionsRequest__Output } from '../payment/GetUserSubscriptionsRequest';
import type { GetUserSubscriptionsResponse as _payment_GetUserSubscriptionsResponse, GetUserSubscriptionsResponse__Output as _payment_GetUserSubscriptionsResponse__Output } from '../payment/GetUserSubscriptionsResponse';
import type { GetUserTransactionsRequest as _payment_GetUserTransactionsRequest, GetUserTransactionsRequest__Output as _payment_GetUserTransactionsRequest__Output } from '../payment/GetUserTransactionsRequest';
import type { GetUserTransactionsResponse as _payment_GetUserTransactionsResponse, GetUserTransactionsResponse__Output as _payment_GetUserTransactionsResponse__Output } from '../payment/GetUserTransactionsResponse';
import type { GetUserWalletRequest as _payment_GetUserWalletRequest, GetUserWalletRequest__Output as _payment_GetUserWalletRequest__Output } from '../payment/GetUserWalletRequest';
import type { GetUserWalletResponse as _payment_GetUserWalletResponse, GetUserWalletResponse__Output as _payment_GetUserWalletResponse__Output } from '../payment/GetUserWalletResponse';
import type { SubscribeWithWalletRequest as _payment_SubscribeWithWalletRequest, SubscribeWithWalletRequest__Output as _payment_SubscribeWithWalletRequest__Output } from '../payment/SubscribeWithWalletRequest';
import type { SubscribeWithWalletResponse as _payment_SubscribeWithWalletResponse, SubscribeWithWalletResponse__Output as _payment_SubscribeWithWalletResponse__Output } from '../payment/SubscribeWithWalletResponse';
import type { UpdateOrderRequest as _payment_UpdateOrderRequest, UpdateOrderRequest__Output as _payment_UpdateOrderRequest__Output } from '../payment/UpdateOrderRequest';
import type { UpdateOrderResponse as _payment_UpdateOrderResponse, UpdateOrderResponse__Output as _payment_UpdateOrderResponse__Output } from '../payment/UpdateOrderResponse';

export interface PaymentServiceClient extends grpc.Client {
  CreateOrder(argument: _payment_CreateOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  CreateOrder(argument: _payment_CreateOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_payment_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  CreateOrder(argument: _payment_CreateOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  CreateOrder(argument: _payment_CreateOrderRequest, callback: grpc.requestCallback<_payment_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _payment_CreateOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _payment_CreateOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_payment_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _payment_CreateOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _payment_CreateOrderRequest, callback: grpc.requestCallback<_payment_CreateOrderResponse__Output>): grpc.ClientUnaryCall;
  
  CreateOrderStatusOption(argument: _payment_CreateOrderStatusOptionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_CreateOrderStatusOptionResponse__Output>): grpc.ClientUnaryCall;
  CreateOrderStatusOption(argument: _payment_CreateOrderStatusOptionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_payment_CreateOrderStatusOptionResponse__Output>): grpc.ClientUnaryCall;
  CreateOrderStatusOption(argument: _payment_CreateOrderStatusOptionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_CreateOrderStatusOptionResponse__Output>): grpc.ClientUnaryCall;
  CreateOrderStatusOption(argument: _payment_CreateOrderStatusOptionRequest, callback: grpc.requestCallback<_payment_CreateOrderStatusOptionResponse__Output>): grpc.ClientUnaryCall;
  createOrderStatusOption(argument: _payment_CreateOrderStatusOptionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_CreateOrderStatusOptionResponse__Output>): grpc.ClientUnaryCall;
  createOrderStatusOption(argument: _payment_CreateOrderStatusOptionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_payment_CreateOrderStatusOptionResponse__Output>): grpc.ClientUnaryCall;
  createOrderStatusOption(argument: _payment_CreateOrderStatusOptionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_CreateOrderStatusOptionResponse__Output>): grpc.ClientUnaryCall;
  createOrderStatusOption(argument: _payment_CreateOrderStatusOptionRequest, callback: grpc.requestCallback<_payment_CreateOrderStatusOptionResponse__Output>): grpc.ClientUnaryCall;
  
  CreatePayment(argument: _payment_CreatePaymentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_CreatePaymentResponse__Output>): grpc.ClientUnaryCall;
  CreatePayment(argument: _payment_CreatePaymentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_payment_CreatePaymentResponse__Output>): grpc.ClientUnaryCall;
  CreatePayment(argument: _payment_CreatePaymentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_CreatePaymentResponse__Output>): grpc.ClientUnaryCall;
  CreatePayment(argument: _payment_CreatePaymentRequest, callback: grpc.requestCallback<_payment_CreatePaymentResponse__Output>): grpc.ClientUnaryCall;
  createPayment(argument: _payment_CreatePaymentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_CreatePaymentResponse__Output>): grpc.ClientUnaryCall;
  createPayment(argument: _payment_CreatePaymentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_payment_CreatePaymentResponse__Output>): grpc.ClientUnaryCall;
  createPayment(argument: _payment_CreatePaymentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_CreatePaymentResponse__Output>): grpc.ClientUnaryCall;
  createPayment(argument: _payment_CreatePaymentRequest, callback: grpc.requestCallback<_payment_CreatePaymentResponse__Output>): grpc.ClientUnaryCall;
  
  CreateSubscription(argument: _payment_CreateSubscriptionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_CreateSubscriptionResponse__Output>): grpc.ClientUnaryCall;
  CreateSubscription(argument: _payment_CreateSubscriptionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_payment_CreateSubscriptionResponse__Output>): grpc.ClientUnaryCall;
  CreateSubscription(argument: _payment_CreateSubscriptionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_CreateSubscriptionResponse__Output>): grpc.ClientUnaryCall;
  CreateSubscription(argument: _payment_CreateSubscriptionRequest, callback: grpc.requestCallback<_payment_CreateSubscriptionResponse__Output>): grpc.ClientUnaryCall;
  createSubscription(argument: _payment_CreateSubscriptionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_CreateSubscriptionResponse__Output>): grpc.ClientUnaryCall;
  createSubscription(argument: _payment_CreateSubscriptionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_payment_CreateSubscriptionResponse__Output>): grpc.ClientUnaryCall;
  createSubscription(argument: _payment_CreateSubscriptionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_CreateSubscriptionResponse__Output>): grpc.ClientUnaryCall;
  createSubscription(argument: _payment_CreateSubscriptionRequest, callback: grpc.requestCallback<_payment_CreateSubscriptionResponse__Output>): grpc.ClientUnaryCall;
  
  GetUserSubscriptions(argument: _payment_GetUserSubscriptionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_GetUserSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  GetUserSubscriptions(argument: _payment_GetUserSubscriptionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_payment_GetUserSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  GetUserSubscriptions(argument: _payment_GetUserSubscriptionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_GetUserSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  GetUserSubscriptions(argument: _payment_GetUserSubscriptionsRequest, callback: grpc.requestCallback<_payment_GetUserSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  getUserSubscriptions(argument: _payment_GetUserSubscriptionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_GetUserSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  getUserSubscriptions(argument: _payment_GetUserSubscriptionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_payment_GetUserSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  getUserSubscriptions(argument: _payment_GetUserSubscriptionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_GetUserSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  getUserSubscriptions(argument: _payment_GetUserSubscriptionsRequest, callback: grpc.requestCallback<_payment_GetUserSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  
  GetUserTransactions(argument: _payment_GetUserTransactionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_GetUserTransactionsResponse__Output>): grpc.ClientUnaryCall;
  GetUserTransactions(argument: _payment_GetUserTransactionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_payment_GetUserTransactionsResponse__Output>): grpc.ClientUnaryCall;
  GetUserTransactions(argument: _payment_GetUserTransactionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_GetUserTransactionsResponse__Output>): grpc.ClientUnaryCall;
  GetUserTransactions(argument: _payment_GetUserTransactionsRequest, callback: grpc.requestCallback<_payment_GetUserTransactionsResponse__Output>): grpc.ClientUnaryCall;
  getUserTransactions(argument: _payment_GetUserTransactionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_GetUserTransactionsResponse__Output>): grpc.ClientUnaryCall;
  getUserTransactions(argument: _payment_GetUserTransactionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_payment_GetUserTransactionsResponse__Output>): grpc.ClientUnaryCall;
  getUserTransactions(argument: _payment_GetUserTransactionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_GetUserTransactionsResponse__Output>): grpc.ClientUnaryCall;
  getUserTransactions(argument: _payment_GetUserTransactionsRequest, callback: grpc.requestCallback<_payment_GetUserTransactionsResponse__Output>): grpc.ClientUnaryCall;
  
  GetUserWallet(argument: _payment_GetUserWalletRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_GetUserWalletResponse__Output>): grpc.ClientUnaryCall;
  GetUserWallet(argument: _payment_GetUserWalletRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_payment_GetUserWalletResponse__Output>): grpc.ClientUnaryCall;
  GetUserWallet(argument: _payment_GetUserWalletRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_GetUserWalletResponse__Output>): grpc.ClientUnaryCall;
  GetUserWallet(argument: _payment_GetUserWalletRequest, callback: grpc.requestCallback<_payment_GetUserWalletResponse__Output>): grpc.ClientUnaryCall;
  getUserWallet(argument: _payment_GetUserWalletRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_GetUserWalletResponse__Output>): grpc.ClientUnaryCall;
  getUserWallet(argument: _payment_GetUserWalletRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_payment_GetUserWalletResponse__Output>): grpc.ClientUnaryCall;
  getUserWallet(argument: _payment_GetUserWalletRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_GetUserWalletResponse__Output>): grpc.ClientUnaryCall;
  getUserWallet(argument: _payment_GetUserWalletRequest, callback: grpc.requestCallback<_payment_GetUserWalletResponse__Output>): grpc.ClientUnaryCall;
  
  SubscribeWithWallet(argument: _payment_SubscribeWithWalletRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_SubscribeWithWalletResponse__Output>): grpc.ClientUnaryCall;
  SubscribeWithWallet(argument: _payment_SubscribeWithWalletRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_payment_SubscribeWithWalletResponse__Output>): grpc.ClientUnaryCall;
  SubscribeWithWallet(argument: _payment_SubscribeWithWalletRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_SubscribeWithWalletResponse__Output>): grpc.ClientUnaryCall;
  SubscribeWithWallet(argument: _payment_SubscribeWithWalletRequest, callback: grpc.requestCallback<_payment_SubscribeWithWalletResponse__Output>): grpc.ClientUnaryCall;
  subscribeWithWallet(argument: _payment_SubscribeWithWalletRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_SubscribeWithWalletResponse__Output>): grpc.ClientUnaryCall;
  subscribeWithWallet(argument: _payment_SubscribeWithWalletRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_payment_SubscribeWithWalletResponse__Output>): grpc.ClientUnaryCall;
  subscribeWithWallet(argument: _payment_SubscribeWithWalletRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_SubscribeWithWalletResponse__Output>): grpc.ClientUnaryCall;
  subscribeWithWallet(argument: _payment_SubscribeWithWalletRequest, callback: grpc.requestCallback<_payment_SubscribeWithWalletResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateOrder(argument: _payment_UpdateOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_UpdateOrderResponse__Output>): grpc.ClientUnaryCall;
  UpdateOrder(argument: _payment_UpdateOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_payment_UpdateOrderResponse__Output>): grpc.ClientUnaryCall;
  UpdateOrder(argument: _payment_UpdateOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_UpdateOrderResponse__Output>): grpc.ClientUnaryCall;
  UpdateOrder(argument: _payment_UpdateOrderRequest, callback: grpc.requestCallback<_payment_UpdateOrderResponse__Output>): grpc.ClientUnaryCall;
  updateOrder(argument: _payment_UpdateOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_UpdateOrderResponse__Output>): grpc.ClientUnaryCall;
  updateOrder(argument: _payment_UpdateOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_payment_UpdateOrderResponse__Output>): grpc.ClientUnaryCall;
  updateOrder(argument: _payment_UpdateOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_payment_UpdateOrderResponse__Output>): grpc.ClientUnaryCall;
  updateOrder(argument: _payment_UpdateOrderRequest, callback: grpc.requestCallback<_payment_UpdateOrderResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface PaymentServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOrder: grpc.handleUnaryCall<_payment_CreateOrderRequest__Output, _payment_CreateOrderResponse>;
  
  CreateOrderStatusOption: grpc.handleUnaryCall<_payment_CreateOrderStatusOptionRequest__Output, _payment_CreateOrderStatusOptionResponse>;
  
  CreatePayment: grpc.handleUnaryCall<_payment_CreatePaymentRequest__Output, _payment_CreatePaymentResponse>;
  
  CreateSubscription: grpc.handleUnaryCall<_payment_CreateSubscriptionRequest__Output, _payment_CreateSubscriptionResponse>;
  
  GetUserSubscriptions: grpc.handleUnaryCall<_payment_GetUserSubscriptionsRequest__Output, _payment_GetUserSubscriptionsResponse>;
  
  GetUserTransactions: grpc.handleUnaryCall<_payment_GetUserTransactionsRequest__Output, _payment_GetUserTransactionsResponse>;
  
  GetUserWallet: grpc.handleUnaryCall<_payment_GetUserWalletRequest__Output, _payment_GetUserWalletResponse>;
  
  SubscribeWithWallet: grpc.handleUnaryCall<_payment_SubscribeWithWalletRequest__Output, _payment_SubscribeWithWalletResponse>;
  
  UpdateOrder: grpc.handleUnaryCall<_payment_UpdateOrderRequest__Output, _payment_UpdateOrderResponse>;
  
}

export interface PaymentServiceDefinition extends grpc.ServiceDefinition {
  CreateOrder: MethodDefinition<_payment_CreateOrderRequest, _payment_CreateOrderResponse, _payment_CreateOrderRequest__Output, _payment_CreateOrderResponse__Output>
  CreateOrderStatusOption: MethodDefinition<_payment_CreateOrderStatusOptionRequest, _payment_CreateOrderStatusOptionResponse, _payment_CreateOrderStatusOptionRequest__Output, _payment_CreateOrderStatusOptionResponse__Output>
  CreatePayment: MethodDefinition<_payment_CreatePaymentRequest, _payment_CreatePaymentResponse, _payment_CreatePaymentRequest__Output, _payment_CreatePaymentResponse__Output>
  CreateSubscription: MethodDefinition<_payment_CreateSubscriptionRequest, _payment_CreateSubscriptionResponse, _payment_CreateSubscriptionRequest__Output, _payment_CreateSubscriptionResponse__Output>
  GetUserSubscriptions: MethodDefinition<_payment_GetUserSubscriptionsRequest, _payment_GetUserSubscriptionsResponse, _payment_GetUserSubscriptionsRequest__Output, _payment_GetUserSubscriptionsResponse__Output>
  GetUserTransactions: MethodDefinition<_payment_GetUserTransactionsRequest, _payment_GetUserTransactionsResponse, _payment_GetUserTransactionsRequest__Output, _payment_GetUserTransactionsResponse__Output>
  GetUserWallet: MethodDefinition<_payment_GetUserWalletRequest, _payment_GetUserWalletResponse, _payment_GetUserWalletRequest__Output, _payment_GetUserWalletResponse__Output>
  SubscribeWithWallet: MethodDefinition<_payment_SubscribeWithWalletRequest, _payment_SubscribeWithWalletResponse, _payment_SubscribeWithWalletRequest__Output, _payment_SubscribeWithWalletResponse__Output>
  UpdateOrder: MethodDefinition<_payment_UpdateOrderRequest, _payment_UpdateOrderResponse, _payment_UpdateOrderRequest__Output, _payment_UpdateOrderResponse__Output>
}
