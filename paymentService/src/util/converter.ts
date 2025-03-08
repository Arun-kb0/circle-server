import { Date as DbDate, ObjectId, Schema, Types } from "mongoose"
import IOrder from "../interfaces/IOrder"
import IWallet from "../interfaces/IWallet"
import ITransaction from "../interfaces/ITransaction"
import { IOrderDb } from "../model/orderModel"
import IPayment from "../interfaces/IPayment"
import { IPaymentDb } from "../model/paymentModel"
import ISubscription from "../interfaces/ISubscription"
import { ISubscriptionDb } from "../model/subscriptionModel"
import { ITransactionDb } from "../model/transactionModel"
import { IWalletDb } from "../model/walletModel"

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
  const conversionMap: { [key: string]: (value: any) => any } = {
    _id: convertToObjectId,
    orderId: convertToObjectId,
    userId: convertToObjectId,
    createdAt: stringToDate,
    updatedAt: stringToDate,
  }

  const orderDb: Partial<IOrderDb> = {}
  Object.keys(order).forEach((key) => {
    const typedKey = key as keyof IOrder;
    if (order[typedKey] && conversionMap[typedKey]) {
      orderDb[typedKey] = conversionMap[typedKey](order[typedKey])
    } else if (order[typedKey]) {
      orderDb[typedKey as keyof IOrderDb] = order[typedKey] as any;
    }
  })
  return orderDb
}


export const convertIOrderDbToIOrder = (order: IOrderDb): IOrder => {
  return {
    _id: order._id.toString(),
    orderId: order.orderId.toString(),
    merchantTransactionId: order.merchantTransactionId,
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
  const conversionMap: { [key: string]: (value: any) => any } = {
    _id: convertToObjectId,
    userId: convertToObjectId,
    orderId: convertToObjectId,
    transactionDate: stringToDate,
    createdAt: stringToDate,
    updatedAt: stringToDate,
  }

  const paymentDb: Partial<IPaymentDb> = {}
  Object.keys(payment).forEach((key) => {
    const typedKey = key as keyof IPayment;
    if (payment[typedKey] && conversionMap[typedKey]) {
      paymentDb[typedKey] = conversionMap[typedKey](payment[typedKey])
    } else if (payment[typedKey]) {
      paymentDb[typedKey as keyof IPaymentDb] = payment[typedKey] as any;
    }
  })
  return paymentDb

}


export const convertIPaymentDbToIPayment = (payment: IPaymentDb): IPayment => {
  return {
    _id: payment._id.toString(),
    transactionId: payment.transactionId,
    orderId: payment.orderId.toString(),
    method: payment.method,
    amount: payment.amount,
    currency: payment.currency,
    status: payment.status,
    transactionDate: convertDbDateToIsoString(payment.transactionDate),
    createdAt: convertDbDateToIsoString(payment.createdAt),
    updatedAt: convertDbDateToIsoString(payment.updatedAt),
    merchantTransactionId: payment.merchantTransactionId,
    arn: payment.arn,
    authRefId: payment.authRefId,
    userId: payment.userId.toString()
  }
}

export const convertISubscriptionToISubscriptionDb = (subscription: Partial<ISubscription>): Partial<ISubscriptionDb> => {
  const conversionMap: { [key: string]: (value: any) => any } = {
    _id: convertToObjectId,
    subscriberUserId: convertToObjectId,
    subscriberToUserId: convertToObjectId,
    createdAt: stringToDate,
    updatedAt: stringToDate,
  }

  const subscriptionDb: Partial<ISubscriptionDb> = {}
  Object.keys(subscription).forEach((key) => {
    const typedKey = key as keyof ISubscription;
    if (subscription[typedKey] && conversionMap[typedKey]) {
      subscriptionDb[typedKey] = conversionMap[typedKey](subscription[typedKey])
    } else if (subscription[typedKey]) {
      subscriptionDb[typedKey as keyof ISubscriptionDb] = subscription[typedKey] as any;
    }
  })
  return subscriptionDb
}


export const convertISubscriptionDbToISubscription = (subscription: ISubscriptionDb): ISubscription => {
  return {
    _id: subscription._id.toString(),
    merchantTransactionId: subscription.merchantTransactionId,
    subscriberUserId: subscription.subscriberUserId.toString(),
    subscriberToUserId: subscription.subscriberToUserId.toString(),
    plan: subscription.plan,
    status: subscription.status,
    createdAt: convertDbDateToIsoString(subscription.createdAt),
    updatedAt: convertDbDateToIsoString(subscription.updatedAt)
  }
}

export const convertIWalletToIWalletDb = (wallet: Partial<IWallet>): Partial<IWalletDb> => {
  const conversionMap: { [key: string]: (value: any) => any } = {
    _id: convertToObjectId,
    userId: convertToObjectId,
    createdAt: stringToDate,
    updatedAt: stringToDate,
  }

  const walletDb: Partial<IWalletDb> = {}
  Object.keys(wallet).forEach((key) => {
    const typedKey = key as keyof IWallet;
    if (wallet[typedKey] && conversionMap[typedKey]) {
      walletDb[typedKey] = conversionMap[typedKey](wallet[typedKey])
    } else if (wallet[typedKey]) {
      walletDb[typedKey as keyof IWalletDb] = wallet[typedKey] as any;
    }
  })
  return walletDb
}


export const convertIWalletDbToIWallet = (wallet: IWalletDb): IWallet => {
  return {
    _id: wallet._id.toString(),
    userId: wallet.userId.toString(),
    balance: wallet.balance,
    currency  : wallet.currency,
    createdAt: convertDbDateToIsoString(wallet.createdAt),
    updatedAt: convertDbDateToIsoString(wallet.updatedAt)
  }
}

export const convertITransactionToITransactionDb = (transaction: Partial<ITransaction>): Partial<ITransactionDb> => {
  const conversionMap: { [key: string]: (value: any) => any } = {
    _id: convertToObjectId,
    userId: convertToObjectId,
    senderId: convertToObjectId,
    receiverId: convertToObjectId,
    createdAt: stringToDate,
    updatedAt: stringToDate,
  }

  const transactionDb: Partial<ITransactionDb> = {}
  Object.keys(transaction).forEach((key) => {
    const typedKey = key as keyof ITransaction;
    if (transaction[typedKey] && conversionMap[typedKey]) {
      transactionDb[typedKey] = conversionMap[typedKey](transaction[typedKey])
    } else if (transaction[typedKey]) {
      transactionDb[typedKey as keyof ITransactionDb] = transaction[typedKey] as any;
    }
  })
  return transactionDb
}


export const convertITransactionDbToITransaction = (transaction: ITransactionDb): ITransaction => {
  return {
    _id: transaction._id.toString(),
    userId: transaction.userId.toString(),
    senderId: transaction.senderId.toString(),
    receiverId: transaction.receiverId.toString(),
    amount  : transaction.amount,
    currency: transaction.currency,
    type: transaction.type,
    status : transaction.status,
    createdAt: convertDbDateToIsoString(transaction.createdAt),
    updatedAt: convertDbDateToIsoString(transaction.updatedAt)
  }
}
