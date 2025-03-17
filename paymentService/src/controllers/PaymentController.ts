import IOrder from "../interfaces/IOrder";
import IPayment from "../interfaces/IPayment";
import IPaymentController, {
  CreateOrderHandler, CreateOrderStatusOptionHandler,
  CreatePaymentHandler, CreateSubscriptionHandler, CreateUserSubscriptionPlanHandler, GetAllSubscriptionsHandler, GetAllTransactionsHandler, GetUserSubscriptionPlanHandler, GetUserSubscriptionsHandler,
  GetUserTransactionsHandler,
  GetUserWalletHandler,
  SubscribeWithWalletHandler,
  UpdateOrderHandler
} from "../interfaces/IPaymentController";
import IPaymentService from "../interfaces/IPaymentService";
import ISubscription from "../interfaces/ISubscription";
import IUserSubscriptionPlan from "../interfaces/IUserSubscriptionPlan";
import handleError from "../util/handleError";
import { validateRequest, validateResponse } from '../util/validations'

class PaymentController implements IPaymentController {

  constructor(
    private paymentService: IPaymentService
  ) { }

  createUserSubscriptionPlan: CreateUserSubscriptionPlanHandler = async (call, cb) => {
    try {
      const { monthly, yearly, lifetime, userId } = call.request
      validateRequest('monthly, yearly, lifetime and userId are required', monthly, yearly, lifetime, userId)
      const res = await this.paymentService.createUserSubscriptionPlan({ monthly, yearly, lifetime, userId } as Partial<IUserSubscriptionPlan>)
      validateResponse(res)
      cb(null, { userSubscriptionPlan: res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  getUserSubscriptionPlan: GetUserSubscriptionPlanHandler = async (call, cb) => {
    try {
      const { userId } = call.request
      validateRequest('userId is required', userId)
      const res = await this.paymentService.getUserSubscriptionPlan(userId as string)
      validateResponse(res)
      cb(null, { userSubscriptionPlan: res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  getAllTransactions: GetAllTransactionsHandler = async (call, cb) => {
    try {
      const { searchText, page, startDate, endDate } = call.request
      validateRequest('page is required', page)
      const res = await this.paymentService.getAllTransactions(searchText as string, page as number, startDate, endDate)
      validateResponse(res)
      cb(null, res.data)
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  getAllSubscriptions: GetAllSubscriptionsHandler = async (call, cb) => {
    try {
      const { searchText, page, startDate, endDate } = call.request
      validateRequest('page is required', page)
      const res = await this.paymentService.getAllSubscriptions(searchText as string, page as number, startDate, endDate)
      validateResponse(res)
      cb(null, res.data)
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }


  subscribeWithWallet: SubscribeWithWalletHandler = async (call, cb) => {
    try {
      const { subscription, order } = call.request
      validateRequest('subscription and order are required', subscription, order)
      const res = await this.paymentService.subscribeWithWallet(
        subscription as Partial<ISubscription>,
        order as Partial<IOrder>
      )
      validateResponse(res)
      cb(null, res.data)
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  createSubscription: CreateSubscriptionHandler = async (call, cb) => {
    try {
      const { subscription } = call.request
      validateRequest('subscription is required', subscription)
      const res = await this.paymentService.createSubscription(subscription as Partial<ISubscription>)
      validateResponse(res)
      cb(null, { subscription: res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  updateOrder: UpdateOrderHandler = async (call, cb) => {
    try {
      const { orderId, order } = call.request
      validateRequest('orderId and order are required', orderId, order)
      const res = await this.paymentService.updateOrder(orderId as string, order as Partial<IOrder>)
      validateResponse(res)
      cb(null, { order: res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  createOrder: CreateOrderHandler = async (call, cb) => {
    try {
      const { amount, subscriberEmail, subscriberUserId, orderType } = call.request
      validateRequest('Amount , subscriberEmail, subscriberUserId and orderType are required',
        amount, subscriberEmail, subscriberUserId, orderType)
      const res = await this.paymentService.createOrder(
        subscriberUserId as string,
        subscriberEmail as string,
        amount as number,
        orderType as unknown as IOrder['orderType']
      )
      validateResponse(res)
      cb(null, res.data)
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  createOrderStatusOption: CreateOrderStatusOptionHandler = async (call, cb) => {
    try {
      const { merchantTransactionId } = call.request
      validateRequest('merchantTransactionId is required', merchantTransactionId)
      const res = await this.paymentService.createOrderStatusOption(merchantTransactionId as string)
      validateResponse(res)
      cb(null, res.data)
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

  getUserSubscriptions: GetUserSubscriptionsHandler = async (call, cb) => {
    try {
      const { userId, page } = call.request
      validateRequest('userId and page are required', userId, page)
      const res = await this.paymentService.getUserSubscriptions(userId as string, page as number)
      validateResponse(res)
      console.log(res.data)
      cb(null, { ...res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  getUserTransactions: GetUserTransactionsHandler = async (call, cb) => {
    try {
      const { userId, page } = call.request
      validateRequest('userId and page are required', userId, page)
      const res = await this.paymentService.getUserTransactions(userId as string, page as number)
      validateResponse(res)
      cb(null, { ...res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  getUserWallet: GetUserWalletHandler = async (call, cb) => {
    try {
      const { userId } = call.request
      validateRequest('userId is required', userId)
      const res = await this.paymentService.getUserWallet(userId as string)
      validateResponse(res)
      cb(null, { wallet: res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

}

export default PaymentController