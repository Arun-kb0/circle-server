import { Socket } from "socket.io";
import ChatGrpcClient from '../config/ChatGrpcClient'
import socketErrorHandler from '../middleware/socketErrorHandler'
import HttpError from "../util/HttpError";
import httpStatus from "../constants/httpStatus";
import { AnswerCallEventDataType, CallUserEventDataType, IceCandidateDataType, JoinCallRoomDataType, QueueNotificationDataType, SignalDataType, UserRoomNotificationType } from "../constants/types";
import { SocketEvents } from "../constants/enums";
import { publishMessage } from '../util/rabbitmq'

const chatClient = ChatGrpcClient.getClient()
ChatGrpcClient.IsClientConnected()
const QUEUE_NAME = process.env.NOTIFICATION_QUEUE_NAME || 'notification-queue'

export const joinUserRoom = (socket: Socket, friendsRoomId: string) => {
  socket.join(friendsRoomId)
}


export const joinRoom = (socket: Socket, chatRoom: any) => {
  chatClient.createRoom({ chatRoom }, (err, msg) => {
    if (err) return socketErrorHandler(err)
    if (!msg) return new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'Join chat room failed.')
  })
  socket.join(chatRoom.roomId)
}

export const sendMessage = (socket: Socket, message: any) => {
  try {
    socket.to(message.roomId).emit(SocketEvents.receiveMessage, message)
    chatClient.createMessage({ message }, (err, msg) => {
      if (err) return socketErrorHandler(err)
      if (!msg) return new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'Send message failed.')
    })
  } catch (error) {
    socketErrorHandler(error)
  }
}


export const joinCallRoom = (socket: Socket, data: any) => {
  try {
    const { roomId, userId } = data as JoinCallRoomDataType
    if (typeof roomId !== 'string' || typeof userId !== 'string') {
      throw new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'Join call room failed.')
    }
    socket.join(roomId)
    const resData = { roomId, userId, id: socket.id }
    socket.to(roomId).emit(SocketEvents.callUserConnected, resData)
  } catch (error) {
    socketErrorHandler(error)
  }
}

export const handleSignal = (socket: Socket, data: SignalDataType) => {
  try {
    const { roomId, caller, type, receiverId, user } = data
    if (!roomId || !user) throw new Error('roomId required')
    if (type === 'end-call') {
      socket.to(roomId).emit(SocketEvents.callEnded, { caller: caller, user })
      return
    }
    socket.to(roomId).emit(SocketEvents.callStarted, { roomId: roomId, user })
    socket.to(roomId).emit(SocketEvents.signal, data)

    //  * sending notification
    if (type === 'offer') {
      const userRoomData: UserRoomNotificationType = {
        type: "incoming-call",
        roomId,
        caller,
        chatUser: user
      }
      socket.to(receiverId).emit(SocketEvents.userRoomNotification, userRoomData)
    }
  } catch (error) {
    socketErrorHandler(error)
  }
}


// * new socket events
export const callUser = (socket: Socket, data: CallUserEventDataType) => {
  try {
    const { signal, from, name, userToCall, extraData } = data
    socket.to(userToCall).emit(SocketEvents.callUser, {
      signal: signal,
      from: from,
      name: name
    })
    const notificationData: QueueNotificationDataType = {
      _id: '',
      authorId: extraData.authorId,
      receiverId: extraData.receiverId,
      type: 'call',
      message: 'incoming call',
      read: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      data: { ...extraData, roomId: from, signal }
    }
    publishMessage(QUEUE_NAME, JSON.stringify(notificationData))
  } catch (error) {
    socketErrorHandler(error)
  }
}


export const answerCall = (socket: Socket, data: AnswerCallEventDataType) => {
  try {
    socket.to(data.to).emit(SocketEvents.callAccepted, data.signal)
  } catch (error) {
    socketErrorHandler(error)
  }
}

export const leaveCall = (socket: Socket) => {
  try {
    socket.broadcast.emit(SocketEvents.callEnded)
  } catch (error) {
    socketErrorHandler(error)
  }
}

export const iceCandidate = (socket: Socket, data: IceCandidateDataType) => {
  try {
    socket.to(data.to).emit(SocketEvents.iceCandidate, data.candidate);
  } catch (error) {
    socketErrorHandler(error);
  }
}
