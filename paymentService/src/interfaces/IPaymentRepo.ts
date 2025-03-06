import IOrder from './IOrder'
import IPayment from './IPayment'
import ISubscription from './ISubscription'

interface IPaymentRepo {
  createOrder(order: Partial<IOrder>): Promise<IOrder>
  createPayment(payment: Partial<IPayment>): Promise<IPayment>
  createSubscription(subscription: Partial<ISubscription>): Promise<ISubscription>
  getSubscriptionById(subscriptionId: string): Promise<ISubscription | null>
  getUserSubscriptions(userId: string): Promise<ISubscription[]>
}

export default IPaymentRepo