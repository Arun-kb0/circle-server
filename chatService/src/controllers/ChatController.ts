import { PaginationMessages } from "../constants/SvcReturnType";
import IChatController, {
  CreateMessageHandler, CreateRoomHandler, DeleteMessageHandler,
  DeleteRoomHandler,
  DeleteRoomMessagesHandler,
  FindMessageByUerHandler, FindMessageMessageHandler,
  FindRoomByRoomIdHandler,
  GetMessageHandler,
  UpdateMessageHandler,
  UpdateRoomHandler
} from "../interfaces/IChatController";
import IChatRoom from "../interfaces/IChatRoom";
import IChatService from "../interfaces/IChatService";
import { ChatRoom } from "../proto/chat/ChatRoom";
import { Message } from "../proto/chat/Message";
import { convertMessageToIMessage, } from "../util/converter"
import handleError from "../util/handleError";
import { validateRequest, validateResponse } from "../util/validations"

class ChatController implements IChatController {

  constructor(
    private chatService: IChatService
  ) { }

  getMessages: GetMessageHandler = async (call, cb) => {
    try {
      const { roomId, page } = call.request
      validateRequest('roomId and page are required.', roomId, page)
      const res = await this.chatService.getMessages(roomId as string, page as number)
      validateResponse(res)
      const { messages, ...rest } = res.data as PaginationMessages
      cb(null, { messages, ...rest })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  deleteRoomMessages: DeleteRoomMessagesHandler = async (call, cb) => {
    try {
      const { roomId } = call.request
      validateRequest('roomId is required.', roomId)
      const res = await this.chatService.deleteRoomMessages(roomId as string)
      if (!res) validateResponse(res)
      cb(null, { isDeleted: res.data as boolean })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  createMessage: CreateMessageHandler = async (call, cb) => {
    try {
      const { message } = call.request
      validateRequest('message is required.', message)
      const convertedMsg = convertMessageToIMessage(message as Message)
      const res = await this.chatService.createMessage(convertedMsg)
      validateResponse(res)
      cb(null, { message: res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  updateMessage: UpdateMessageHandler = async (call, cb) => {
    try {
      const { messageId, message } = call.request
      validateRequest('message and messageId are required.', messageId, message)
      const msgCommon = convertMessageToIMessage(message as Message)
      const res = await this.chatService.updateMessage(messageId as string, msgCommon)
      validateResponse(res)
      cb(null, { message: res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  deleteMessage: DeleteMessageHandler = async (call, cb) => {
    try {
      const { messageId } = call.request
      validateRequest('messageId is required.', messageId)
      const res = await this.chatService.deleteMessage(messageId as string)
      validateResponse(res)
      cb(null, { message: res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }


  findMessageByUser: FindMessageByUerHandler = async (call, cb) => {
    try {
      const { userId } = call.request
      validateRequest('userId is required.', userId)
      const res = await this.chatService.findMessageByUser(userId as string)
      validateResponse(res)
      cb(null, { messages: res.data ? res.data : [] })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  findMessageById: FindMessageMessageHandler = async (call, cb) => {
    try {
      const { messageId } = call.request
      validateRequest('messageId is required.', messageId)
      const res = await this.chatService.findMessageById(messageId as string)
      validateResponse(res)
      cb(null, { message: res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  // * chat room calls
  createRoom: CreateRoomHandler = async (call, cb) => {
    try {
      const { chatRoom } = call.request
      validateRequest('chatRoom is required.', chatRoom)
      const res = await this.chatService.createChatRoom(chatRoom as Partial<IChatRoom>)
      validateResponse(res)
      cb(null, { chatRoom: res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  updateRoom: UpdateRoomHandler = async (call, cb) => {
    try {
      const { roomId, chatRoom } = call.request
      validateRequest('chatRoom is required.', chatRoom)
      const res = await this.chatService.updateChatRoom(roomId as string, chatRoom as Partial<ChatRoom>)
      validateResponse(res)
      cb(null, { chatRoom: res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  deleteRoom: DeleteRoomHandler = async (call, cb) => {
    try {
      const { chatRoomId } = call.request
      validateRequest('chatRoomId is required.', chatRoomId)
      const res = await this.chatService.deleteChatRoom(chatRoomId as string)
      validateResponse(res)
      cb(null, { chatRoom: res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  findRoomByRoomId: FindRoomByRoomIdHandler = async (call, cb) => {
    try {
      const { chatRoomId } = call.request
      validateRequest('chatRoomId is required.', chatRoomId)
      const res = await this.chatService.findByIdChatRoom(chatRoomId as string)
      validateResponse(res)
      cb(null, { chatRoom: res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

}

export default ChatController