import { error } from "console";
import { SvcReturnType } from "../constants/SvcReturnType";
import { OrderOptionType, OrderStatusOptionType, SubscriptionAdminPagination, SubscriptionPagination, TransactionAdminPagination, TransactionPagination } from "../constants/types";
import IOrder from "../interfaces/IOrder";
import IPayment from "../interfaces/IPayment";
import IPaymentRepo from "../interfaces/IPaymentRepo";
import IPaymentService from "../interfaces/IPaymentService";
import ISubscription from "../interfaces/ISubscription";
import handleError from "../util/handleError";
import crypto from 'crypto'
import IWallet from "../interfaces/IWallet";
import httpStatus from '../constants/httpStatus'
import { Wallet } from "../proto/payment/Wallet";
import IUserSubscriptionPlan from "../interfaces/IUserSubscriptionPlan";

const MERCHANT_ID = process.env.PP_MERCHANT_ID || ""
const MERCHANT_KEY = process.env.PP_MERCHANT_KEY || ""
const REDIRECT_URL = process.env.PP_REDIRECT_URL || ""
const MERCHANT_BASE_URL = process.env.PP_MERCHANT_BASE_URL || ""
const MERCHANT_STATUS_URL = process.env.PP_MERCHANT_STATUS_URL || ""
const LIMIT = 10

class PaymentService implements IPaymentService {

  constructor(
    private paymentRepo: IPaymentRepo
  ) { }

 async createUserSubscriptionPlan(plan: Partial<IUserSubscriptionPlan>): SvcReturnType<IUserSubscriptionPlan> {
    try {
      const newPlan = await this.paymentRepo.createUserSubscriptionPlan(plan)
      return { err: null, data: newPlan }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

 async getUserSubscriptionPlan(userId: string): SvcReturnType<IUserSubscriptionPlan | null> {
    try {
      const foundPlan = await this.paymentRepo.getUserSubscriptionPlan(userId)
      return { err: null, data: foundPlan }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

  async getAllTransactions(searchText: string, page: number, startDate?: string, endDate?: string): SvcReturnType<TransactionAdminPagination> {
    try {
      const startIndex = (page - 1) * LIMIT
      const total = await this.paymentRepo.getAllTransactionsCount(searchText, startDate, endDate)
      const numberOfPages = Math.ceil(total / LIMIT)
      const transactions = await this.paymentRepo.getAllTransactions(searchText, LIMIT, startIndex, startDate, endDate)
      if (!transactions) return { err: httpStatus.NOT_FOUND, errMsg: 'No transactions found', data: null }
      const data = {
        transactions,
        numberOfPages,
        currentPage: page,
      }
      return { err: null, data }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

  async getAllSubscriptions(searchText: string, page: number, startDate?: string, endDate?: string): SvcReturnType<SubscriptionAdminPagination> {
    try {
      const startIndex = (page - 1) * LIMIT
      const total = await this.paymentRepo.getAllSubscriptionsCount(searchText, startDate, endDate)
      const numberOfPages = Math.ceil(total / LIMIT)
      const subs = await this.paymentRepo.getAllSubscriptions(searchText, LIMIT, startIndex, startDate, endDate)
      if (!subs) return { err: httpStatus.NOT_FOUND, errMsg: 'No subscriptions found', data: null }
      const data = {
        subscriptions: subs,
        numberOfPages,
        currentPage: page,
      }
      return { err: null, data }
    } catch (error) {
      const err = handleError(error)
      return { err: err.code, errMsg: err.message, data: null }
    }
  }

  async subscribeWithWallet(subscription: Partial<ISubscription>, order: Partial<IOrder>): SvcReturnType<{ wallet: IWallet; subscription: ISubscription; }> {
    try {
      const userId = order.userId as string
      const amount = order.amount as number
      const subscriberWallet = await this.paymentRepo.findWalletByUserId(userId)
      if (!subscriberWallet || subscriberWallet?.balance < amount) {
        return { err: httpStatus.BAD_REQUEST, errMsg: 'Not enough amount in wallet', data: null }
      }
      const newOrder = await this.paymentRepo.createOrder(order)
      const newSub = await this.paymentRepo.createSubscription(subscription)
      const subscribeToWallet: Partial<IWallet> = {
        userId: newSub.subscriberToUserId,
        balance: 0,
        currency: "INR",
      }
      await this.paymentRepo.createWallet(subscribeToWallet)
      await this.paymentRepo.findWalletByUserIdAndUpdateAmount({
        userId: newSub.subscriberUserId,
        senderId: newSub.subscriberUserId,
        receiverId: newSub.subscriberToUserId,
        amount: amount,
        isInc: false
      })
      await this.paymentRepo.findWalletByUserIdAndUpdateAmount({
        userId: newSub.subscriberToUserId,
        senderId: newSub.subscriberUserId,
        receiverId: newSub.subscriberToUserId,
        amount: amount,
        isInc: true
      })

      const updatedWallet = await this.paymentRepo.findWalletByUserId(userId)
      return { err: null, data: { wallet: updatedWallet as IWallet, subscription: newSub } }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async createSubscription(subscription: Partial<ISubscription>): SvcReturnType<ISubscription> {
    try {
      const newSub = await this.paymentRepo.createSubscription(subscription)
      return { err: null, data: newSub }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async updateOrder(orderId: string, order: Partial<IOrder>): SvcReturnType<IOrder | null> {
    try {
      const updatedOrder = await this.paymentRepo.updateOrder(orderId, order)
      return { err: null, data: updatedOrder }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async createOrder(subscriberUserId: string, subscriberEmail: string, amount: number, orderType: IOrder['orderType']): SvcReturnType<{ option: OrderOptionType, orderId: string }> {
    try {
      console.log('create order in service')
      const order: Partial<IOrder> = {
        userId: subscriberUserId,
        amount: amount,
        orderType: orderType,
        state: "pending",
        userSubscriptionDuration: 'lifetime'
      }
      const newOrder = await this.paymentRepo.createOrder(order)

      const paymentPayload = {
        merchantId: MERCHANT_ID,
        merchantTransactionId: newOrder.orderId,
        amount: amount * 100,
        merchantUserId: subscriberUserId,
        redirectUrl: `${REDIRECT_URL}/?id=${newOrder.orderId}`,
        redirectMode: 'POST',
        callbackUrl: `${REDIRECT_URL}/?id=${newOrder.orderId}`,
        paymentInstrument: {
          type: 'PAY_PAGE'
        },
        email: subscriberEmail,
      }
      console.log("paymentPayload")
      console.log(paymentPayload)

      const payload = Buffer.from(JSON.stringify(paymentPayload)).toString('base64')
      const keyIndex = 1
      const string = payload + '/pg/v1/pay' + MERCHANT_KEY
      const sha256 = crypto.createHash('sha256').update(string).digest('hex')
      const checksum = sha256 + '###' + keyIndex

      const option = {
        method: 'POST',
        url: MERCHANT_BASE_URL,
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          'X-VERIFY': checksum
        },
        data: {
          request: payload
        }
      }
      return { err: null, data: { option, orderId: newOrder.orderId } }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async createOrderStatusOption(merchantTransactionId: string): SvcReturnType<{ transactionId: string, option: OrderStatusOptionType }> {
    try {
      const keyIndex = 1
      const string = `/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}` + MERCHANT_KEY
      const sha256 = crypto.createHash('sha256').update(string).digest('hex')
      const checksum = sha256 + '###' + keyIndex

      const option = {
        method: 'GET',
        url: `${MERCHANT_STATUS_URL}/${MERCHANT_ID}/${merchantTransactionId}`,
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          'X-VERIFY': checksum,
          'X-MERCHANT-ID': MERCHANT_ID
        },
      }

      return { err: null, data: { transactionId: merchantTransactionId, option } }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }


  async createPayment(paymentData: Partial<IPayment>): SvcReturnType<IPayment> {
    try {
      const merchantTransactionId = paymentData.merchantTransactionId as string
      const order = await this.paymentRepo.findOrderByMerchantTransactionId(merchantTransactionId)
      if (!order) throw new Error('create payment order not found')
      const updatedPaymentData: Partial<IPayment> = {
        ...paymentData,
        userId: order.userId,
        orderId: order.orderId
      }
      const newPaymentData = await this.paymentRepo.createPayment(updatedPaymentData)
      await this.paymentRepo.updateOrder(order.orderId, { state: "completed" })
      const subs = await this.paymentRepo.getSubsByMerchantTransactionIdAndUpdate(merchantTransactionId, { status: 'active' })
      if (!subs) throw new Error('Subscription update failed')
      const isExists = await this.paymentRepo.findWalletByUserId(subs.subscriberToUserId)
      if (isExists) {
        // *
        // await this.paymentRepo.findWalletByUserIdAndUpdateAmount(subs.subscriberToUserId, subs.subscriberUserId, order.amount, true)
        await this.paymentRepo.findWalletByUserIdAndUpdateAmount({
          userId: subs.subscriberToUserId,
          senderId: subs.subscriberUserId,
          receiverId: subs.subscriberToUserId,
          amount: order.amount,
          isInc: true
        })
      } else {
        const wallet: Partial<IWallet> = {
          userId: subs.subscriberToUserId,
          balance: 0,
          currency: newPaymentData.currency,
        }
        await this.paymentRepo.createWallet(wallet)
        // *
        // await this.paymentRepo.findWalletByUserIdAndUpdateAmount(subs.subscriberToUserId, subs.subscriberUserId, order.amount, true)
        await this.paymentRepo.findWalletByUserIdAndUpdateAmount({
          userId: subs.subscriberToUserId,
          senderId: subs.subscriberUserId,
          receiverId: subs.subscriberToUserId,
          amount: order.amount,
          isInc: true
        })
        console.log(wallet)
      }
      return { err: null, data: newPaymentData }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async getUserSubscriptions(userId: string, page: number): SvcReturnType<SubscriptionPagination> {
    try {
      const subscriptionData = await this.paymentRepo.getUserSubscriptions(userId, page)
      return { err: null, data: subscriptionData }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }


  async getUserTransactions(userId: string, page: number): SvcReturnType<TransactionPagination> {
    try {
      const transaction = await this.paymentRepo.getUserTransactions(userId, page)
      return { err: null, data: transaction }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }


  async getUserWallet(userId: string): SvcReturnType<Wallet> {
    try {
      const wallet = await this.paymentRepo.findWalletByUserId(userId)
      return { err: null, data: wallet }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }


}

export default PaymentService