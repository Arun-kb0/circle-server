import PaymentBaseRepo from './repositories/base/PaymentBaseRepo'
import SubscriptionsBaseRepo from './repositories/base/SubscriptionBaseRepo'
import OrderBaseRepo from './repositories/base/OrderBaseRepo'
import WalletBaseRepo from './repositories/base/WalletBaseRepo'
import PaymentRepo from './repositories/PaymentRepo'
import PaymentService from './services/PaymentService'
import PaymentController from './controllers/PaymentController'
import UserSubscriptionPlanBaseRepo from './repositories/base/UserSubscriptionPlanBaseRepo'


const paymentBaseRepo = new PaymentBaseRepo()
const orderBaseRepo = new OrderBaseRepo()
const subscriptionBaseRepo = new SubscriptionsBaseRepo()
const walletBaseRepo = new WalletBaseRepo()
const userSubscriptionPlanBaseRepo = new UserSubscriptionPlanBaseRepo()

const paymentRepo = new PaymentRepo(
  orderBaseRepo,
  paymentBaseRepo,
  subscriptionBaseRepo,
  walletBaseRepo,
  userSubscriptionPlanBaseRepo
)
const paymentService = new PaymentService(paymentRepo)
export const paymentController = new PaymentController(paymentService)

