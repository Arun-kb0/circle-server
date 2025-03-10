import { NextFunction, Request, Response } from "express";
import axios from "axios";
import HttpError from "../util/HttpError";
import httpStatus from "../constants/httpStatus";
import PaymentGrpcClient from '../config/PaymentGrpcClient'
import { Payment } from "../protos/paymentProto/payment/Payment";
import { Order } from "../protos/paymentProto/payment/Order";
import { AuthRequest, PaymentResponseType } from "../constants/types";
import { Subscription } from "../protos/paymentProto/payment/Subscription";
import { v4 as uuid } from "uuid";

const paymentClient = PaymentGrpcClient.getClient()

const SUCCESS_URL = process.env.PP_SUCCESS_URL || ""
const FAILURE_URL = process.env.PP_FAILURE_URL || ""


const createSubscription = async (subscriberUserId: string, subscribedToUserId: string, merchantTransactionId: string, plan: Subscription['plan']) => {
  const subscription: Subscription = {
    subscriberUserId,
    subscriberToUserId: subscribedToUserId,
    merchantTransactionId,
    plan,
    status: 'inactive'
  }
  console.log(subscription)
  paymentClient.createSubscription({ subscription }, (err, msg) => {
    if (err) return new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message)
    if (!msg) return new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'Update subscription failed.')
    return msg.subscription
  })
}

const updateOder = async (orderId: string, order: Order) => {
  try {
    console.log('update order')
    console.log(order)
    paymentClient.updateOrder({ orderId, order }, (err, msg) => {
      if (err) return new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message)
      if (!msg) return new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'Update order failed.')
      console.log('update return order')
      return msg.order
    })
  } catch (error) {
    if (error instanceof Error)
      throw new Error(error.message)
    throw new Error("Update oder failed")
  }
}

const createPayment = async (paymentResponse: PaymentResponseType) => {
  try {
    const paymentData: Payment = {
      transactionId: paymentResponse.data.transactionId,
      method: paymentResponse.data.paymentInstrument.type,
      amount: Math.floor(paymentResponse.data.amount / 100),
      status: paymentResponse.data.state === 'COMPLETED' ? 'successful' : 'failed',
      transactionDate: new Date().toISOString(),
      merchantTransactionId: paymentResponse.data.merchantTransactionId,
      arn: paymentResponse.data.paymentInstrument.arn,
      authRefId: paymentResponse.data.paymentInstrument.authRefId,
    }
    paymentClient.createPayment({ paymentData }, (err, msg) => {
      if (err) return new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message)
      if (!msg) return new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'Update order failed.')
      return msg.paymentData
    })
  } catch (error) {
    if (error instanceof Error)
      throw new Error(error.message)
    throw new Error("Update oder failed")
  }
}

export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('get phone pay create order')
    const {
      amount, subscriberUserId, subscriberEmail,
      orderType, subscribedToUserId, subscriberName, subscribedToUserName
    } = req.body

    paymentClient.createOrder({ subscriberUserId, subscriberEmail, amount, orderType }, async (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'Create order failed.'))
      if (!msg.option || !msg.orderId) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'Option or orderId is not found in message.'))
      const response = await axios.request(msg.option)
      const responseUrl = response.data.data.instrumentResponse.redirectInfo.url
      const { merchantTransactionId } = response.data.data
      console.log('create order')
      console.log(response.data)
      await updateOder(msg.orderId, { merchantTransactionId, state: 'pending', userSubscriptionDuration: 'lifetime' })
      await createSubscription(subscriberUserId, subscribedToUserId, merchantTransactionId, 'lifetime')
      res.status(httpStatus.OK).json({ message: 'create order success', url: responseUrl })
    })
  } catch (error) {
    next(error)
  }
}

export const getStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('get phone pay status')
    const merchantTransactionId = req.query.id;
    if (typeof merchantTransactionId !== 'string') throw new HttpError(httpStatus.BAD_REQUEST, 'id is required')

    paymentClient.createOrderStatusOption({ merchantTransactionId }, async (err, msg) => {
      if (err) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message))
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'Create order status option failed.'))
      if (!msg.option) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'Option not found in message.'))
      console.log(msg.option)
      console.log(msg.transactionId)
      const response = await axios.request(msg.option)
      console.log(response.data)
      if (response.data.success === true) {
        await createPayment(response.data)
        return res.redirect(SUCCESS_URL)
      } else {
        return res.redirect(FAILURE_URL)
      }
    })

  } catch (error) {
    next(error)
  }
}

export const subscribeWithWallet = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const {
      amount, subscriberUserId, subscriberEmail,
      orderType, subscribedToUserId, subscriberName, subscribedToUserName
    } = req.body

    const merchantTransactionId = uuid()
    const order: Order = {
      merchantTransactionId,
      userId: subscriberUserId,
      amount,
      orderType: 'user_subscription',
      userSubscriptionDuration: 'lifetime',
      state: 'pending'
    }
    const subscription: Subscription = {
      merchantTransactionId,
      subscriberToUserId: subscribedToUserId,
      subscriberUserId,
      plan: 'lifetime',
      status: 'active'
    }

    paymentClient.subscribeWithWallet({ subscription, order }, (err, msg) => {
      if (err) return next(new HttpError(httpStatus.BAD_REQUEST, err.details))
      if (!msg) return next(new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'Payment with wallet failed failed.'))
      res.status(httpStatus.OK).json({ message: "Payment success", ...msg, url: SUCCESS_URL })
    })
  } catch (error) {
    next(error)
  }
}

export const getUserWallet = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { userId } = req
    paymentClient.getUserWallet({ userId }, (err, msg) => {
      if (err) return new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message)
      if (!msg) return new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'get user wallet failed failed.')
      res.status(httpStatus.OK).json({ message: 'get user wallet success', ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const getUserTransactions = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { userId } = req
    const { page } = req.query
    if (typeof userId !== 'string' || isNaN(Number(page))) throw new HttpError(httpStatus.BAD_REQUEST, 'page and userId are required')
    paymentClient.getUserTransactions({ userId, page: Number(page) }, (err, msg) => {
      if (err) return new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message)
      if (!msg) return new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'get transactions failed failed.')
      res.status(httpStatus.OK).json({ message: 'get transactions success', ...msg })
    })
  } catch (error) {
    next(error)
  }
}

export const getUserSubscriptions = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { userId } = req
    const { page } = req.query
    console.log(userId, page)
    if (typeof userId !== 'string' || isNaN(Number(page))) throw new HttpError(httpStatus.BAD_REQUEST, 'page and userId are required')
    paymentClient.getUserSubscriptions({ userId, page: Number(page) }, (err, msg) => {
      if (err) return new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err.message)
      if (!msg) return new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'get subscriptions failed failed.')
      res.status(httpStatus.OK).json({ message: 'get subscriptions success', ...msg })
    })
  } catch (error) {
    next(error)
  }
}
