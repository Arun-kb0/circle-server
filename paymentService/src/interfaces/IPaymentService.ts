import { SvcReturnType } from "../constants/SvcReturnType"
import IOrder from "./IOrder"
import IPayment from "./IPayment"
import ISubscription from "./ISubscription"
import { OrderOptionType, OrderStatusOptionType, SubscriptionAdminPagination, SubscriptionPagination, TransactionAdminPagination, TransactionPagination } from '../constants/types'
import IWallet from "./IWallet"
import { Wallet } from "../proto/payment/Wallet"
import IUserSubscriptionPlan from "./IUserSubscriptionPlan"

interface IPaymentService {
  createOrder(subscriberUserId: string, subscriberEmail: string, amount: number, orderType: IOrder['orderType']): SvcReturnType<{ option: OrderOptionType, orderId: string }>
  updateOrder(orderId: string, order: Partial<IOrder>): SvcReturnType<IOrder | null>
  createOrderStatusOption(merchantTransactionId: string): SvcReturnType<{ transactionId: string, option: OrderStatusOptionType }>

  createPayment(paymentData: Partial<IPayment>): SvcReturnType<IPayment>

  getUserSubscriptions(userId: string, page: number): SvcReturnType<SubscriptionPagination>
  createSubscription(subscription: Partial<ISubscription>): SvcReturnType<ISubscription>
  getAllSubscriptions(searchText: string, page: number, startDate?: string, endDate?: string): SvcReturnType<SubscriptionAdminPagination>

  getUserWallet(userId: string) : SvcReturnType<Wallet>
  subscribeWithWallet(subscription: Partial<ISubscription>, order: Partial<IOrder>): SvcReturnType<{ wallet: IWallet, subscription: ISubscription }>
  getUserTransactions(userId: string, page: number): SvcReturnType<TransactionPagination>
  getAllTransactions(searchText: string, page: number, startDate?: string, endDate?: string): SvcReturnType<TransactionAdminPagination>


  createUserSubscriptionPlan(plan: Partial<IUserSubscriptionPlan>): SvcReturnType<IUserSubscriptionPlan>
  getUserSubscriptionPlan(userId: string): SvcReturnType<IUserSubscriptionPlan | null>
}

export default IPaymentService