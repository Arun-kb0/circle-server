import ISubscription from '../interfaces/ISubscription'

interface ISubscriptionBaseRepo {
  createSubscription(subscriptionData: Partial<ISubscription>): Promise<ISubscription>
  updateSubscription(subscriptionId: string, subscriptionData: Partial<ISubscription>): Promise<ISubscription | null>
  findSubscriptionById(subscriptionId: string): Promise<ISubscription | null>
  findByIdAndDelete(subscriptionId: string): Promise<ISubscription | null>
  findSubscriptionsByUserId(userId: string): Promise<ISubscription[]>
}

export default ISubscriptionBaseRepo

