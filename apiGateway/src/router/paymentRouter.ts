import express from 'express'
import { createOrder, getStatus } from '../controller/paymentController'
const router = express.Router()

router.post('/create-order', createOrder)
router.post('/status', getStatus)

export default router