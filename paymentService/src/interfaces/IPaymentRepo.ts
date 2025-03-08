import { SubscriptionPagination, TransactionPagination } from '../constants/types'
import IOrder from './IOrder'
import IPayment from './IPayment'
import ISubscription from './ISubscription'
import IWallet from './IWallet'

interface IPaymentRepo {
  createWallet(wallet: Partial<IWallet>): Promise<IWallet | null>
  findWalletByUserId(userId: string): Promise<IWallet | null>
  findWalletByUserIdAndUpdateAmount(userId: string, subscriberId: string, amount: number, isInc: boolean): Promise<IWallet | null>

  createOrder(order: Partial<IOrder>): Promise<IOrder>
  updateOrder(orderId: string, order: Partial<IOrder>): Promise<IOrder>

  findOrderByMerchantTransactionId(merchantTransactionId: string): Promise<IOrder | null>
  createPayment(payment: Partial<IPayment>): Promise<IPayment>

  createSubscription(subscription: Partial<ISubscription>): Promise<ISubscription>
  getSubscriptionById(subscriptionId: string): Promise<ISubscription | null>  
  getUserSubscriptions(userId: string, page: number): Promise<SubscriptionPagination>
  getSubsByMerchantTransactionIdAndUpdate(merchantTransactionId: string, subscription: Partial<ISubscription>): Promise<ISubscription | null>

  getUserTransactions (userId: string, page: number): Promise<TransactionPagination>
}

export default IPaymentRepo