import IChatController, {
  CreateMessageHandler, CreateRoomHandler, DeleteMessageHandler,
  DeleteRoomHandler,
  FindMessageByUerHandler, FindMessageMessageHandler,
  FindRoomByRoomIdHandler,
  UpdateMessageHandler,
  UpdateRoomHandler
} from "../interfaces/IChatController";
import IChatRoom from "../interfaces/IChatRoom";
import IChatService from "../interfaces/IChatService";
import IMessage from "../interfaces/IMessage";
import { ChatRoom } from "../proto/chat/ChatRoom";
import { Message } from "../proto/chat/Message";
import { convertChatRoomForDb, convertChatRoomForGrpc, convertMessageForDb, convertMessageForGrpc } from "../util/converter"
import handleError from "../util/handleError";
import { validateRequest, validateResponse } from "../util/validations"


class ChatController implements IChatController {

  constructor(
    private chatService: IChatService
  ) { }

  createMessage: CreateMessageHandler = async (call, cb) => {
    try {
      const { message } = call.request
      validateRequest('message is required.', message)
      const msgDb = convertMessageForDb(message as Message)
      const res = await this.chatService.createMessage(msgDb)
      validateResponse(res)
      const msgGrpc = convertMessageForGrpc(res.data as IMessage)
      cb(null, { message: msgGrpc })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  updateMessage: UpdateMessageHandler = async (call, cb) => {
    try {
      const { message } = call.request
      validateRequest('message is required.', message)
      const msgDb = convertMessageForDb(message as Message)
      const res = await this.chatService.updateMessage(msgDb)
      validateResponse(res)
      const msgGrpc = convertMessageForGrpc(res.data as IMessage)
      cb(null, { message: msgGrpc })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  deleteMessage: DeleteMessageHandler = async (call, cb) => {
    try {
      const { roomId } = call.request
      validateRequest('roomId is required.', roomId)
      const res = await this.chatService.deleteMessage(roomId as string)
      validateResponse(res)
      const msgGrpc = convertMessageForGrpc(res.data as IMessage)
      cb(null, { message: msgGrpc })
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
      if (!res.data) return cb(null, { messages: [] })
      const msgGrpcArray = res.data?.map(msg => convertMessageForGrpc(msg))
      cb(null, { messages: msgGrpcArray })
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
      if (!res.data) return cb(null, null)
      const msgGrpc = convertMessageForGrpc(res.data)
      cb(null, { message: msgGrpc })
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
      const roomDb = convertChatRoomForDb(chatRoom as ChatRoom)
      const res = await this.chatService.createChatRoom(roomDb)
      validateResponse(res)
      const roomGrpc = convertChatRoomForGrpc(res.data as IChatRoom)
      cb(null, { chatRoom: roomGrpc })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  updateRoom: UpdateRoomHandler = async (call, cb) => {
    try {
      const { chatRoom } = call.request
      validateRequest('chatRoom is required.', chatRoom)
      const roomDb = convertChatRoomForDb(chatRoom as ChatRoom)
      const res = await this.chatService.updateChatRoom(roomDb)
      validateResponse(res)
      const roomGrpc = convertChatRoomForGrpc(res.data as IChatRoom)
      cb(null, { chatRoom: roomGrpc })
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
      const roomGrpc = convertChatRoomForGrpc(res.data as IChatRoom)
      cb(null, { chatRoom: roomGrpc })
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
      if (!res.data) return cb(null, { chatRooms: [] })
      const roomGrpcArray = res.data.map(room => convertChatRoomForGrpc(room))
      cb(null, { chatRooms: roomGrpcArray })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

}

export default ChatController