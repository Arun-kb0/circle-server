import express from 'express'
import {
  createOrder, getStatus, getUserSubscriptions,
  getUserTransactions, getUserWallet, subscribeWithWallet
} from '../controller/paymentController'
import authorize from '../middleware/authorize'
const router = express.Router()


router.post('/status', getStatus)

router.use(authorize)

router.post('/create-order', createOrder)
router.post('/subscribe-using-wallet', subscribeWithWallet)

router.get('/wallet', getUserWallet)
router.get('/transactions', getUserTransactions)
router.get('/subscriptions', getUserSubscriptions)

export default router