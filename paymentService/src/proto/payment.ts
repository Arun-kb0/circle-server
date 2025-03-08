import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { PaymentServiceClient as _payment_PaymentServiceClient, PaymentServiceDefinition as _payment_PaymentServiceDefinition } from './payment/PaymentService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  payment: {
    CreateOrderOption: MessageTypeDefinition
    CreateOrderRequest: MessageTypeDefinition
    CreateOrderResponse: MessageTypeDefinition
    CreateOrderStatusOptionRequest: MessageTypeDefinition
    CreateOrderStatusOptionResponse: MessageTypeDefinition
    CreatePaymentRequest: MessageTypeDefinition
    CreatePaymentResponse: MessageTypeDefinition
    CreateStatusOption: MessageTypeDefinition
    CreateSubscriptionRequest: MessageTypeDefinition
    CreateSubscriptionResponse: MessageTypeDefinition
    GetUserSubscriptionsRequest: MessageTypeDefinition
    GetUserSubscriptionsResponse: MessageTypeDefinition
    GetUserTransactionsRequest: MessageTypeDefinition
    GetUserTransactionsResponse: MessageTypeDefinition
    GetUserWalletRequest: MessageTypeDefinition
    GetUserWalletResponse: MessageTypeDefinition
    Order: MessageTypeDefinition
    OrderEnum: MessageTypeDefinition
    Payment: MessageTypeDefinition
    PaymentEnum: MessageTypeDefinition
    PaymentService: SubtypeConstructor<typeof grpc.Client, _payment_PaymentServiceClient> & { service: _payment_PaymentServiceDefinition }
    SubscribeWithWalletRequest: MessageTypeDefinition
    SubscribeWithWalletResponse: MessageTypeDefinition
    Subscription: MessageTypeDefinition
    SubscriptionEnum: MessageTypeDefinition
    Transaction: MessageTypeDefinition
    TransactionEnums: MessageTypeDefinition
    TransactionExt: MessageTypeDefinition
    UpdateOrderRequest: MessageTypeDefinition
    UpdateOrderResponse: MessageTypeDefinition
    Wallet: MessageTypeDefinition
  }
}

