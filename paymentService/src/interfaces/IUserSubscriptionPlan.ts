
interface IUserSubscriptionPlan {
  _id: string
  userId: string
  monthly: number
  yearly: number
  lifetime: number
  createdAt: string
  updatedAt: string
}

export default IUserSubscriptionPlan

