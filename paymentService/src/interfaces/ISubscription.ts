
interface ISubscription {
  _id: string
  subscriberUserId: string
  subscriberToUserId: string
  plan: 'monthly' | 'yearly' | 'lifetime'
  status: 'inactive' | 'active' | 'cancelled'
  createdAt: string
  updatedAt: string
}

export default ISubscription