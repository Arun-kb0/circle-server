import IOrder from "../interfaces/IOrder";
import IPayment from "../interfaces/IPayment";
import ISubscription from "../interfaces/ISubscription";
import IPaymentRepo from "../interfaces/IPaymentRepo";
import handleError from '../util/handleError'
import ISubscriptionBaseRepo from "../interfaces/ISubscriptionBaseRepo";
import IPaymentBaseRepo from "../interfaces/IPaymentBaseRepo";
import IOrderBaseRepo from "../interfaces/IOrderBaseRepo";
import IWalletBaseRepo from '../interfaces/IWalletBaseRepo'
import IWallet from "../interfaces/IWallet";
import { findWalletByUserIdAndUpdateAmountArgs, SubscriptionPagination, TransactionPagination } from "../constants/types";
import { addUsersToTransactions, addUserToTransaction } from '../util/userClientFunctions'
import ITransaction from "../interfaces/ITransaction";

const LIMIT = 10

class PaymentRepo implements IPaymentRepo {

  constructor(
    private orderBaseRepo: IOrderBaseRepo,
    private paymentBaseRepo: IPaymentBaseRepo,
    private subscriptionBaseRepo: ISubscriptionBaseRepo,
    private walletBaseRepo: IWalletBaseRepo,
  ) { }

  // async sendMoneyThroughWallet(userId: string, senderId: string, receiverId: string, amount: number): Promise<IWallet | null> {
  //  try {

  //  } catch (error) {
  //    const err = handleError(error)
  //    throw new Error(err.message)
  //  }
  // }

  async getUserTransactions(userId: string, page: number): Promise<TransactionPagination> {
    try {
      const startIndex = (page - 1) * LIMIT
      const total = await this.walletBaseRepo.findTransactionsByUserIdCount(userId)
      const numberOfPages = Math.ceil(total / LIMIT)
      const transactions = await this.walletBaseRepo.findTransactionsByUserId(userId, LIMIT, startIndex)
      const transactionsWithUser = await addUsersToTransactions(transactions)
      console.log(transactionsWithUser)
      return {
        currentPage: page + 1,
        numberOfPages,
        transactions: transactionsWithUser
      }
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async createWallet(wallet: IWallet): Promise<IWallet | null> {
    try {
      const newWallet = await this.walletBaseRepo.createWallet(wallet)
      return newWallet
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findWalletByUserId(userId: string): Promise<IWallet | null> {
    try {
      const foundWallet = await this.walletBaseRepo.findWalletByUserId(userId)
      return foundWallet
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  // ! working code
  // async findWalletByUserIdAndUpdateAmount(userId: string, senderId: string, amount: number, isInc: boolean): Promise<IWallet | null> {
  //   try {
  //     await this.walletBaseRepo.createTransaction(userId, senderId, userId, amount, isInc, 'completed')
  //     const updatedWallet = await this.walletBaseRepo.findByUserIdAndUpdateAmount(userId, amount, isInc)
  //     return updatedWallet
  //   } catch (error) {
  //     const err = handleError(error)
  //     throw new Error(err.message)
  //   }
  // }

  async findWalletByUserIdAndUpdateAmount({ userId, senderId, receiverId, amount, isInc }: findWalletByUserIdAndUpdateAmountArgs): Promise<IWallet | null> {
    try {
      const transaction: Partial<ITransaction> = {
        userId,
        senderId,
        receiverId,
        type: isInc ? 'credit' : 'debit',
        amount,
        currency: "INR",
        status: 'completed'
      }
      await this.walletBaseRepo.createTransaction(transaction)
      const updatedWallet = await this.walletBaseRepo.findByUserIdAndUpdateAmount(userId, amount, isInc)
      return updatedWallet
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async getSubsByMerchantTransactionIdAndUpdate(merchantTransactionId: string, subscription: Partial<ISubscription>): Promise<ISubscription | null> {
    try {
      const subs = await this.subscriptionBaseRepo.findSubsByMerchantTransactionIdAndUpdate(merchantTransactionId, subscription)
      return subs
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async getSubscriptionById(subscriptionId: string): Promise<ISubscription | null> {
    try {
      const subs = await this.subscriptionBaseRepo.findSubscriptionById(subscriptionId)
      return subs
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async createSubscription(subscription: Partial<ISubscription>): Promise<ISubscription> {
    try {
      const newSub = await this.subscriptionBaseRepo.createSubscription(subscription)
      return newSub
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }


  async findOrderByMerchantTransactionId(merchantTransactionId: string): Promise<IOrder | null> {
    try {
      const newOrder = await this.orderBaseRepo.findOrderByMerchantTransactionId(merchantTransactionId)
      return newOrder
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }


  async updateOrder(orderId: string, order: Partial<IOrder>): Promise<IOrder> {
    try {
      const newOrder = await this.orderBaseRepo.findByOrderIdAndUpdate(orderId, order)
      return newOrder
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }


  createOrder(order: Partial<IOrder>): Promise<IOrder> {
    try {
      const newOrder = this.orderBaseRepo.createOrder(order)
      return newOrder
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  createPayment(payment: Partial<IPayment>): Promise<IPayment> {
    try {
      const newPayment = this.paymentBaseRepo.createPayment(payment)
      return newPayment
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async getUserSubscriptions(userId: string, page: number): Promise<SubscriptionPagination> {
    try {
      const startIndex = (page - 1) * LIMIT
      const total = await this.subscriptionBaseRepo.findSubscriptionsByUserIdCount(userId)
      const numberOfPages = Math.ceil(total / LIMIT)
      const subscriptionData = await this.subscriptionBaseRepo.findSubscriptionsByUserId(userId, LIMIT, startIndex)
      return {
        currentPage: page + 1,
        numberOfPages,
        subscriptions: subscriptionData
      }
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }


}

export default PaymentRepo