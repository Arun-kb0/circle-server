import ChatBaseRepo from './repositories/base/ChatBaseRepo'
import ChatRepo from './repositories/ChatRepo'
import ChatService from './services/ChatService'
import ChatController from './controllers/ChatController'

export const chatBaseRepo = new ChatBaseRepo()
export const chatRepo = new ChatRepo(chatBaseRepo)
export const chatService = new ChatService(chatRepo)
export const chatController = new ChatController(chatService)
