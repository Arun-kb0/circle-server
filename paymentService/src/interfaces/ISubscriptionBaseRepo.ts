import { SubscriptionPagination } from '../constants/types'
import ISubscription from '../interfaces/ISubscription'

interface ISubscriptionBaseRepo {
  createSubscription(subscriptionData: Partial<ISubscription>): Promise<ISubscription>
  updateSubscription(subscriptionId: string, subscriptionData: Partial<ISubscription>): Promise<ISubscription | null>
  findSubscriptionById(subscriptionId: string): Promise<ISubscription | null>
  findByIdAndDelete(subscriptionId: string): Promise<ISubscription | null>
  findSubsByMerchantTransactionIdAndUpdate(merchantTransactionId: string, subscription: Partial<ISubscription>): Promise<ISubscription | null>

  findSubscriptionsByUserId(userId: string, limit: number, startIndex: number): Promise<ISubscription[]>
  findSubscriptionsByUserIdCount(userId: string): Promise<number>

  filteredSubscriptionsByDateAndTextCount(searchText: string, startDate?: string, endDate?: string): Promise<number>
  filteredSubscriptionsByDateAndText(searchText: string, limit: number, startIndex: number, startDate?: string, endDate?: string): Promise<ISubscription[]>
}

export default ISubscriptionBaseRepo

