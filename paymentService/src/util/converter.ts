import { Date as DbDate, ObjectId, Schema, Types } from "mongoose"
import IOrder from "../interfaces/IOrder"
import { IOrderDb } from "../model/orderModel"
import IPayment from "../interfaces/IPayment"
import { IPaymentDb } from "../model/paymentModel"
import ISubscription from "../interfaces/ISubscription"
import { ISubscriptionDb } from "../model/subscriptionModel"

export const stringToDate = (str: string) => {
  return new Date(str) as unknown as Schema.Types.Date
}

export const convertToObjectId = (id: string): Types.ObjectId | null => {
  return Types.ObjectId.isValid(id) ? new Types.ObjectId(id) : null
}

const convertDbDateToIsoString = (dbDate: DbDate): string => {
  return new Date(dbDate.toString()).toISOString()
}


export const convertIOrderToIOrderDb = (order: Partial<IOrder>): Partial<IOrderDb> => {
  const orderDb: Partial<IOrderDb> = {};
  if (order._id !== undefined) orderDb._id = convertToObjectId(order._id) as Types.ObjectId
  if (order.orderId !== undefined) orderDb.orderId = convertToObjectId(order.orderId) as Types.ObjectId
  if (order.userId !== undefined) orderDb.userId = convertToObjectId(order.userId) as Types.ObjectId
  if (order.amount !== undefined) orderDb.amount = order.amount
  if (order.orderType !== undefined) orderDb.orderType = order.orderType
  if (order.state !== undefined) orderDb.state = order.state
  if (order.createdAt !== undefined) orderDb.createdAt = stringToDate(order.createdAt)
  if (order.updatedAt !== undefined) orderDb.updatedAt = stringToDate(order.updatedAt)
  return orderDb
}


export const convertIOrderDbToIOrder = (order: IOrderDb): IOrder => {
  return {
    _id: order._id.toString(),
    orderId: order.orderId.toString(),
    userId: order.userId.toString(),
    amount: order.amount,
    orderType: order.orderType,
    userSubscriptionDuration: order.userSubscriptionDuration,
    state: order.state,
    createdAt: convertDbDateToIsoString(order.createdAt),
    updatedAt: convertDbDateToIsoString(order.updatedAt)
  }
}

export const convertIPaymentToIPaymentDb = (payment: Partial<IPayment>): Partial<IPaymentDb> => {
  const paymentDb: Partial<IPaymentDb> = {};
  if (payment._id !== undefined) paymentDb._id = convertToObjectId(payment._id) as Types.ObjectId
  if (payment.paymentId !== undefined) paymentDb.paymentId = payment.paymentId
  if (payment.orderId !== undefined) paymentDb.orderId = convertToObjectId(payment.orderId) as Types.ObjectId
  if (payment.method !== undefined) paymentDb.method = payment.method
  if (payment.amount !== undefined) paymentDb.amount = payment.amount
  if (payment.currency !== undefined) paymentDb.currency = payment.currency
  if (payment.status !== undefined) paymentDb.status = payment.status
  if (payment.transactionDate !== undefined) paymentDb.transactionDate = stringToDate(payment.transactionDate)
  if (payment.createdAt !== undefined) paymentDb.createdAt = stringToDate(payment.createdAt)
  if (payment.updatedAt !== undefined) paymentDb.updatedAt = stringToDate(payment.updatedAt)
  return paymentDb
}


export const convertIPaymentDbToIPayment = (payment: IPaymentDb): IPayment => {
  return {
    _id: payment._id.toString(),
    paymentId: payment.paymentId as string,
    orderId: payment.orderId.toString(),
    method: payment.method,
    amount: payment.amount,
    currency: payment.currency,
    status: payment.status,
    transactionDate: convertDbDateToIsoString(payment.transactionDate),
    createdAt: convertDbDateToIsoString(payment.createdAt),
    updatedAt: convertDbDateToIsoString(payment.updatedAt)
  }
}

export const convertISubscriptionToISubscriptionDb = (subscription: Partial<ISubscription>): Partial<ISubscriptionDb> => {
  const subscriptionDb: Partial<ISubscriptionDb> = {};
  if (subscription._id !== undefined) subscriptionDb._id = convertToObjectId(subscription._id) as Types.ObjectId
  if (subscription.subscriberUserId !== undefined) subscriptionDb.subscriberUserId = convertToObjectId(subscription.subscriberUserId) as Types.ObjectId
  if (subscription.subscriberToUserId !== undefined) subscriptionDb.subscriberToUserId = convertToObjectId(subscription.subscriberToUserId) as Types.ObjectId
  if (subscription.plan !== undefined) subscriptionDb.plan = subscription.plan
  if (subscription.status !== undefined) subscriptionDb.status = subscription.status
  if (subscription.createdAt !== undefined) subscriptionDb.createdAt = stringToDate(subscription.createdAt)
  if (subscription.updatedAt !== undefined) subscriptionDb.updatedAt = stringToDate(subscription.updatedAt)
  return subscriptionDb
}


export const convertISubscriptionDbToISubscription = (subscription: ISubscriptionDb): ISubscription => {
  return {
    _id: subscription._id.toString(),
    subscriberUserId: subscription.subscriberUserId.toString(),
    subscriberToUserId: subscription.subscriberToUserId.toString(),
    plan: subscription.plan,
    status: subscription.status,
    createdAt: convertDbDateToIsoString(subscription.createdAt),
    updatedAt: convertDbDateToIsoString(subscription.updatedAt)
  }
}
