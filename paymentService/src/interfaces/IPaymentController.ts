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
import { GetUserTransactionsRequest__Output } from '../proto/payment/GetUserTransactionsRequest'
import { GetUserTransactionsResponse } from '../proto/payment/GetUserTransactionsResponse'
import { GetUserWalletRequest__Output } from '../proto/payment/GetUserWalletRequest'
import { GetUserWalletResponse } from '../proto/payment/GetUserWalletResponse'
import { GetAllSubscriptionsRequest__Output } from '../proto/payment/GetAllSubscriptionsRequest'
import { GetAllSubscriptionsResponse } from '../proto/payment/GetAllSubscriptionsResponse'
import { GetAllTransactionsRequest__Output } from '../proto/payment/GetAllTransactionsRequest'
import { GetAllTransactionsResponse } from '../proto/payment/GetAllTransactionsResponse'
import { CreateUserSubscriptionPlanRequest__Output } from '../proto/payment/CreateUserSubscriptionPlanRequest'
import { CreateUserSubscriptionPlanResponse } from '../proto/payment/CreateUserSubscriptionPlanResponse'
import { GetUserSubscriptionPlanRequest__Output } from '../proto/payment/GetUserSubscriptionPlanRequest'
import { GetUserSubscriptionPlanResponse } from '../proto/payment/GetUserSubscriptionPlanResponse'

export type CreateOrderHandler = grpc.handleUnaryCall<CreateOrderRequest__Output, CreateOrderResponse>
export type UpdateOrderHandler = grpc.handleUnaryCall<UpdateOrderRequest__Output, UpdateOrderResponse>
export type CreatePaymentHandler = grpc.handleUnaryCall<CreatePaymentRequest__Output, CreatePaymentResponse>
export type GetUserSubscriptionsHandler = grpc.handleUnaryCall<GetUserSubscriptionsRequest__Output, GetUserSubscriptionsResponse>
export type CreateOrderStatusOptionHandler = grpc.handleUnaryCall<CreateOrderStatusOptionRequest__Output, CreateOrderStatusOptionResponse>
export type CreateSubscriptionHandler = grpc.handleUnaryCall<CreateSubscriptionRequest__Output, CreateSubscriptionResponse>
export type SubscribeWithWalletHandler = grpc.handleUnaryCall<SubscribeWithWalletRequest__Output, SubscribeWithWalletResponse>
export type GetUserTransactionsHandler = grpc.handleUnaryCall<GetUserTransactionsRequest__Output, GetUserTransactionsResponse>
export type GetUserWalletHandler = grpc.handleUnaryCall<GetUserWalletRequest__Output, GetUserWalletResponse>
export type GetAllSubscriptionsHandler = grpc.handleUnaryCall<GetAllSubscriptionsRequest__Output, GetAllSubscriptionsResponse>
export type GetAllTransactionsHandler = grpc.handleUnaryCall<GetAllTransactionsRequest__Output, GetAllTransactionsResponse>
export type CreateUserSubscriptionPlanHandler = grpc.handleUnaryCall<CreateUserSubscriptionPlanRequest__Output,CreateUserSubscriptionPlanResponse>
export type GetUserSubscriptionPlanHandler = grpc.handleUnaryCall<GetUserSubscriptionPlanRequest__Output, GetUserSubscriptionPlanResponse>

interface IPaymentController {
  createOrder: CreateOrderHandler
  updateOrder: UpdateOrderHandler,
  createOrderStatusOption: CreateOrderStatusOptionHandler,

  createPayment: CreatePaymentHandler

  getUserSubscriptions: GetUserSubscriptionsHandler
  createSubscription: CreateSubscriptionHandler
  getAllSubscriptions: GetAllSubscriptionsHandler

  subscribeWithWallet: SubscribeWithWalletHandler
  getUserTransactions: GetUserTransactionsHandler
  getUserWallet: GetUserWalletHandler
  getAllTransactions: GetAllTransactionsHandler

  createUserSubscriptionPlan: CreateUserSubscriptionPlanHandler
  getUserSubscriptionPlan: GetUserSubscriptionPlanHandler
}

export default IPaymentController