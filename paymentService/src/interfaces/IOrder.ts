
interface IOrder {
  _id: string
  orderId: string
  userId: string
  amount: number
  orderType: 'user_subscription' | 'advertisement'
  userSubscriptionDuration?: 'monthly' | 'yearly' | 'lifetime' 
  state: "pending" | "completed" | "failed"
  createdAt: string
  updatedAt: string
}

export default IOrder