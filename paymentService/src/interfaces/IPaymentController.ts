import * as grpc from '@grpc/grpc-js'
import { CreateOrderRequest__Output } from '../proto/payment/CreateOrderRequest'
import { CreateOrderResponse } from '../proto/payment/CreateOrderResponse'
import { CreatePaymentRequest__Output } from '../proto/payment/CreatePaymentRequest'
import { CreatePaymentResponse } from '../proto/payment/CreatePaymentResponse'
import { GetUserSubscriptionsRequest__Output } from '../proto/payment/GetUserSubscriptionsRequest'
import { GetUserSubscriptionsResponse } from '../proto/payment/GetUserSubscriptionsResponse'
import { CreateOrderStatusOptionRequest__Output } from '../proto/payment/CreateOrderStatusOptionRequest'
import { CreateOrderStatusOptionResponse } from '../proto/payment/CreateOrderStatusOptionResponse'
import { UpdateOrderRequest__Output } from '../proto/payment/UpdateOrderRequest'
import { UpdateOrderResponse } from '../proto/payment/UpdateOrderResponse'
import { CreateSubscriptionRequest__Output } from '../proto/payment/CreateSubscriptionRequest'
import { CreateSubscriptionResponse } from '../proto/payment/CreateSubscriptionResponse'
import { SubscribeWithWalletRequest__Output } from '../proto/payment/SubscribeWithWalletRequest'
import { SubscribeWithWalletResponse } from '../proto/payment/SubscribeWithWalletResponse'
import { GetUserTransactionsRequest__Output} from '../proto/payment/GetUserTransactionsRequest'
import { GetUserTransactionsResponse} from '../proto/payment/GetUserTransactionsResponse'
import { GetUserWalletRequest__Output} from '../proto/payment/GetUserWalletRequest'
import { GetUserWalletResponse} from '../proto/payment/GetUserWalletResponse'

export type CreateOrderHandler = grpc.handleUnaryCall<CreateOrderRequest__Output, CreateOrderResponse>
export type UpdateOrderHandler = grpc.handleUnaryCall<UpdateOrderRequest__Output, UpdateOrderResponse>
export type CreatePaymentHandler = grpc.handleUnaryCall<CreatePaymentRequest__Output, CreatePaymentResponse>
export type GetUserSubscriptionsHandler = grpc.handleUnaryCall<GetUserSubscriptionsRequest__Output, GetUserSubscriptionsResponse>
export type CreateOrderStatusOptionHandler = grpc.handleUnaryCall<CreateOrderStatusOptionRequest__Output, CreateOrderStatusOptionResponse>
export type CreateSubscriptionHandler = grpc.handleUnaryCall<CreateSubscriptionRequest__Output, CreateSubscriptionResponse>
export type SubscribeWithWalletHandler = grpc.handleUnaryCall<SubscribeWithWalletRequest__Output, SubscribeWithWalletResponse>
export type GetUserTransactionsHandler = grpc.handleUnaryCall<GetUserTransactionsRequest__Output, GetUserTransactionsResponse>
export type GetUserWalletHandler = grpc.handleUnaryCall<GetUserWalletRequest__Output,GetUserWalletResponse>

interface IPaymentController {
  createOrder: CreateOrderHandler
  updateOrder: UpdateOrderHandler,
  createOrderStatusOption: CreateOrderStatusOptionHandler,

  createPayment: CreatePaymentHandler

  getUserSubscriptions: GetUserSubscriptionsHandler
  createSubscription: CreateSubscriptionHandler

  subscribeWithWallet: SubscribeWithWalletHandler
  getUserTransactions: GetUserTransactionsHandler
  getUserWallet: GetUserWalletHandler
}

export default IPaymentController