import * as grpc from '@grpc/grpc-js'
import { CreateOrderRequest__Output } from '../proto/payment/CreateOrderRequest'
import { CreateOrderResponse } from '../proto/payment/CreateOrderResponse'
import { CreatePaymentRequest__Output } from '../proto/payment/CreatePaymentRequest'
import { CreatePaymentResponse } from '../proto/payment/CreatePaymentResponse'
import { GetSubscriptionsRequest__Output } from '../proto/payment/GetSubscriptionsRequest'
import { GetSubscriptionsResponse } from '../proto/payment/GetSubscriptionsResponse'

export type CreateOrderHandler = grpc.handleUnaryCall<CreateOrderRequest__Output, CreateOrderResponse>
export type CreatePaymentHandler = grpc.handleUnaryCall<CreatePaymentRequest__Output, CreatePaymentResponse>
export type GetSubscriptionsHandler = grpc.handleUnaryCall<GetSubscriptionsRequest__Output, GetSubscriptionsResponse>

interface IPaymentController {
  createOrder: CreateOrderHandler
  createPayment: CreatePaymentHandler
  getSubscriptions: GetSubscriptionsHandler
}

export default IPaymentController