
interface ISubscription {
  _id: string
  merchantTransactionId:string
  subscriberUserId: string
  subscriberToUserId: string
  plan: 'monthly' | 'yearly' | 'lifetime'
  status: 'inactive' | 'active' | 'cancelled'
  createdAt: string
  updatedAt: string
}

export interface ISubscriptionsExt extends ISubscription {
  subscriberUserName?: string
  subscriberUserImage?: string
  subscriberToUserName?: string
  subscriberToUserImage?: string
}

export default ISubscription