import express from 'express'
import {
  clearRoomChat, deleteChatRoom, deleteMessage, findChatRoom,
  getRoomMessages, updateMessage
} from '../controller/chatController'

const router = express.Router()

// * messages
router.get('/room-messages', getRoomMessages)
router.patch('/message/:messageId', updateMessage)
router.delete('/message/:messageId', deleteMessage)
router.delete('/chat-clear/:roomId', clearRoomChat)

// * room
router.route('/chat-room')
  .get(findChatRoom)
  .delete(deleteChatRoom)

router.get('/call-room/')


export default router