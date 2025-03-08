import { error } from "console";
import { SvcReturnType } from "../constants/SvcReturnType";
import { OrderOptionType, OrderStatusOptionType, SubscriptionPagination, TransactionPagination } from "../constants/types";
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

const MERCHANT_ID = process.env.PP_MERCHANT_ID || ""
const MERCHANT_KEY = process.env.PP_MERCHANT_KEY || ""
const REDIRECT_URL = process.env.PP_REDIRECT_URL || ""
const MERCHANT_BASE_URL = process.env.PP_MERCHANT_BASE_URL || ""
const MERCHANT_STATUS_URL = process.env.PP_MERCHANT_STATUS_URL || ""


class PaymentService implements IPaymentService {

  constructor(
    private paymentRepo: IPaymentRepo
  ) { }

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
      await this.paymentRepo.findWalletByUserIdAndUpdateAmount(newSub.subscriberUserId, newSub.subscriberToUserId, amount, true)
      await this.paymentRepo.findWalletByUserIdAndUpdateAmount(newSub.subscriberToUserId, newSub.subscriberUserId, amount, false)

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
        merchantUserId: subscriberUserId,
        email: subscriberEmail,
        amount: amount * 100,
        merchantTransactionId: newOrder.orderId,
        redirectUrl: `${REDIRECT_URL}/?id=${newOrder.orderId}`,
        redirectMode: 'POST',
        paymentInstrument: {
          type: 'PAY_PAGE'
        }
      }

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
        await this.paymentRepo.findWalletByUserIdAndUpdateAmount(subs.subscriberToUserId, subs.subscriberUserId, order.amount, true)
      } else {
        const wallet: Partial<IWallet> = {
          userId: subs.subscriberToUserId,
          balance: 0,
          currency: newPaymentData.currency,
        }
        await this.paymentRepo.createWallet(wallet)
        await this.paymentRepo.findWalletByUserIdAndUpdateAmount(subs.subscriberToUserId, subs.subscriberUserId, order.amount, true)
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