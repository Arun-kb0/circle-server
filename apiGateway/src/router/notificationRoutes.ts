import express from 'express'
import { getNotifications, readNotifications } from '../controller/notificationController'
const router = express.Router()

router.get('/', getNotifications)
router.patch('/read', readNotifications)

export default router