import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { PaymentServiceClient as _payment_PaymentServiceClient, PaymentServiceDefinition as _payment_PaymentServiceDefinition } from './payment/PaymentService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  payment: {
    CreateOrderRequest: MessageTypeDefinition
    CreateOrderResponse: MessageTypeDefinition
    CreatePaymentRequest: MessageTypeDefinition
    CreatePaymentResponse: MessageTypeDefinition
    GetSubscriptionsRequest: MessageTypeDefinition
    GetSubscriptionsResponse: MessageTypeDefinition
    Order: MessageTypeDefinition
    OrderEnum: MessageTypeDefinition
    Payment: MessageTypeDefinition
    PaymentEnum: MessageTypeDefinition
    PaymentService: SubtypeConstructor<typeof grpc.Client, _payment_PaymentServiceClient> & { service: _payment_PaymentServiceDefinition }
    Subscription: MessageTypeDefinition
    SubscriptionEnum: MessageTypeDefinition
  }
}

