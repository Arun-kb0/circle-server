import express from 'express'
import { getRoomMessages } from '../controller/chatController'

const router = express.Router()

router.get('room-messages', getRoomMessages)


export default router