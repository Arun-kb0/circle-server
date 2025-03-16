import express from 'express'
import {
  createOrder, createUserSubscriptionPlan, getStatus, getUserSubscriptionPlan, getUserSubscriptions,
  getUserTransactions, getUserWallet, subscribeWithWallet
} from '../controller/paymentController'
import authorize from '../middleware/authorize'
const router = express.Router()


router.post('/status', getStatus)

router.use(authorize)

router.post('/create-order', createOrder)
router.post('/subscribe-wallet', subscribeWithWallet)

router.post('/user-plan', createUserSubscriptionPlan)
router.get('/user-plan', getUserSubscriptionPlan)

router.get('/wallet', getUserWallet)
router.get('/transactions', getUserTransactions)
router.get('/subscriptions', getUserSubscriptions)

export default router