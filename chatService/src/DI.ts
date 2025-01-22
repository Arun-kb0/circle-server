import MessageBaseRepo from './repositories/base/MessageBaseRepo'
import ChatRoomBaseRepo from './repositories/base/ChatRoomBaseRepo'
import ChatRepo from './repositories/ChatRepo'
import ChatService from './services/ChatService'
import ChatController from './controllers/ChatController'

export const messageBaseRepo = new MessageBaseRepo()
export const chatRoomBaseRepo = new ChatRoomBaseRepo()

export const chatRepo = new ChatRepo(messageBaseRepo, chatRoomBaseRepo)
export const chatService = new ChatService(chatRepo)
export const chatController = new ChatController(chatService)
