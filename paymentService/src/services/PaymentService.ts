import { SvcReturnType } from "../constants/SvcReturnType";
import IOrder from "../interfaces/IOrder";
import IPayment from "../interfaces/IPayment";
import IPaymentRepo from "../interfaces/IPaymentRepo";
import IPaymentService from "../interfaces/IPaymentService";
import ISubscription from "../interfaces/ISubscription";
import handleError from "../util/handleError";

class PaymentService implements IPaymentService {

  constructor(
    private paymentRepo: IPaymentRepo
  ) { }

  async createOrder(order: Partial<IOrder>): SvcReturnType<IOrder> {
    try {
      const newOrder = await this.paymentRepo.createOrder(order)
      return { err: null, data: newOrder }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async createPayment(paymentData: Partial<IPayment>): SvcReturnType<IPayment> {
    try {
      const newPaymentData = await this.paymentRepo.createPayment(paymentData)
      return { err: null, data: newPaymentData }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async getSubscriptions(userId: string): SvcReturnType<ISubscription[]> {
    try {
      const subscriptions = await this.paymentRepo.getUserSubscriptions(userId)
      return { err: null, data: subscriptions }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

}

export default PaymentService