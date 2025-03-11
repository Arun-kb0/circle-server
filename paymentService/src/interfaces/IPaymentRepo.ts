import { findWalletByUserIdAndUpdateAmountArgs, SubscriptionPagination, TransactionPagination } from '../constants/types'
import IOrder from './IOrder'
import IPayment from './IPayment'
import ISubscription, { ISubscriptionsExt } from './ISubscription'
import IWallet from './IWallet'

interface IPaymentRepo {
  createWallet(wallet: Partial<IWallet>): Promise<IWallet | null>
  findWalletByUserId(userId: string): Promise<IWallet | null>
  // ! working type
  // findWalletByUserIdAndUpdateAmount(userId: string, senderId: string, amount: number, isInc: boolean): Promise<IWallet | null>
  findWalletByUserIdAndUpdateAmount({ userId, senderId, receiverId, amount, isInc }: findWalletByUserIdAndUpdateAmountArgs): Promise<IWallet | null>

  createOrder(order: Partial<IOrder>): Promise<IOrder>
  updateOrder(orderId: string, order: Partial<IOrder>): Promise<IOrder>

  findOrderByMerchantTransactionId(merchantTransactionId: string): Promise<IOrder | null>
  createPayment(payment: Partial<IPayment>): Promise<IPayment>

  createSubscription(subscription: Partial<ISubscription>): Promise<ISubscription>
  getSubscriptionById(subscriptionId: string): Promise<ISubscription | null>
  getUserSubscriptions(userId: string, page: number): Promise<SubscriptionPagination>
  getSubsByMerchantTransactionIdAndUpdate(merchantTransactionId: string, subscription: Partial<ISubscription>): Promise<ISubscription | null>
  getAllSubscriptions(searchText: string, limit: number, startIndex: number, startDate?: string, endDate?: string): Promise<ISubscriptionsExt[]>
  getAllSubscriptionsCount(searchText: string, startDate?: string, endDate?: string): Promise<number>

  getUserTransactions(userId: string, page: number): Promise<TransactionPagination>
}

export default IPaymentRepo