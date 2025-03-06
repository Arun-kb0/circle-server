import IOrder from "../interfaces/IOrder";
import IPayment from "../interfaces/IPayment";
import ISubscription from "../interfaces/ISubscription";
import IPaymentRepo from "../interfaces/IPaymentRepo";
import handleError from '../util/handleError'
import ISubscriptionBaseRepo from "../interfaces/ISubscriptionBaseRepo";
import IPaymentBaseRepo from "../interfaces/IPaymentBaseRepo";
import IOrderBaseRepo from "../interfaces/IOrderBaseRepo";

//  ! need to complete this
class PaymentRepo implements IPaymentRepo {

  constructor(
    private orderBaseRepo: IOrderBaseRepo,
    private paymentBaseRepo: IPaymentBaseRepo,
    private subscriptionBaseRepo: ISubscriptionBaseRepo
  ) { }


  createSubscription(subscription: Partial<ISubscription>): Promise<ISubscription> {
    throw new Error("Method not implemented.");
  }

  getSubscriptionById(subscriptionId: string): Promise<ISubscription | null> {
    throw new Error("Method not implemented.");
  }


  createOrder(order: Partial<IOrder>): Promise<IOrder> {
    try {
      const newOrder = this.orderBaseRepo.createOrder(order)
      return newOrder
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  createPayment(payment: Partial<IPayment>): Promise<IPayment> {
    try {
      const newPayment = this.paymentBaseRepo.createPayment(payment)
      return newPayment
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  getUserSubscriptions(userId: string): Promise<ISubscription[]> {
    try {
      const newPayment = this.subscriptionBaseRepo.findSubscriptionsByUserId(userId)
      return newPayment
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }


}

export default PaymentRepo