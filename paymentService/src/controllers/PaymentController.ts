import IOrder from "../interfaces/IOrder";
import IPayment from "../interfaces/IPayment";
import IPaymentController, { CreateOrderHandler, CreatePaymentHandler, GetSubscriptionsHandler } from "../interfaces/IPaymentController";
import IPaymentService from "../interfaces/IPaymentService";
import handleError from "../util/handleError";
import { validateRequest, validateResponse } from '../util/validations'

class PaymentController implements IPaymentController {

  constructor(
    private paymentService: IPaymentService
  ) { }

  createOrder: CreateOrderHandler = async (call, cb) => {
    try {
      const { order } = call.request
      validateRequest('order is required', order)
      const res = await this.paymentService.createOrder(order as Partial<IOrder>)
      validateResponse(res)
      cb(null, { order: res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  createPayment: CreatePaymentHandler = async (call, cb) => {
    try {
      const { paymentData } = call.request
      validateRequest('paymentData is required', paymentData)
      const res = await this.paymentService.createPayment(paymentData as Partial<IPayment>)
      validateResponse(res)
      cb(null, { paymentData: res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  getSubscriptions: GetSubscriptionsHandler = async (call, cb) => {
    try {
      const { userId } = call.request
      validateRequest('userId is required', userId)
      const res = await this.paymentService.getSubscriptions(userId as string)
      validateResponse(res)
      cb(null, { subscriptions: res.data ? res.data : [] })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

}

export default PaymentController