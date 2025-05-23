import express from 'express'
import {
  clearRoomChat, deleteChatRoom, deleteMessage, findChatRoom,
  getLastMessages,
  getRoomMessages, updateMessage
} from '../controller/chatController'

const router = express.Router()

// * messages
router.get('/last-messages', getLastMessages)
router.get('/room-messages', getRoomMessages)
router.patch('/message/:messageId', updateMessage)
router.delete('/message/:messageId', deleteMessage)
router.delete('/chat-clear/:roomId', clearRoomChat)

// * room
router.route('/chat-room')
  .get(findChatRoom)
  .delete(deleteChatRoom)


export default router