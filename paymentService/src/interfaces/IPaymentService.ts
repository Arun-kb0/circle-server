import { SvcReturnType } from "../constants/SvcReturnType"
import IOrder from "./IOrder"
import IPayment from "./IPayment"
import ISubscription from "./ISubscription"

interface IPaymentService {
  createOrder(order: Partial<IOrder>): SvcReturnType<IOrder>
  createPayment(paymentData: Partial<IPayment>): SvcReturnType<IPayment>
  getSubscriptions(userId: string): SvcReturnType<ISubscription[]>
}

export default IPaymentService