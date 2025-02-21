import { Socket } from "socket.io";
import ChatGrpcClient from '../config/ChatGrpcClient'
import socketErrorHandler from '../middleware/socketErrorHandler'
import HttpError from "../util/HttpError";
import httpStatus from "../constants/httpStatus";
import { AnswerCallEventDataType, CallUserEventDataType, IceCandidateDataType, JoinCallRoomDataType, SignalDataType, UserRoomNotificationType } from "../constants/types";
import { SocketEvents } from "../constants/enums";

const chatClient = ChatGrpcClient.getClient()

console.log('chat controller')
ChatGrpcClient.IsClientConnected()


export const joinUserRoom = (socket: Socket, friendsRoomId: string) => {
  socket.join(friendsRoomId)
  console.log(`joinUserRoom`)
  console.log(friendsRoomId)
}


export const joinRoom = (socket: Socket, chatRoom: any) => {
  console.log(`user id ${socket.id} joined roomId ${chatRoom.roomId}`)
  chatClient.createRoom({ chatRoom }, (err, msg) => {
    if (err) return socketErrorHandler(err)
    if (!msg) return new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'Join chat room failed.')
    console.log(msg)
  })
  socket.join(chatRoom.roomId)
}

export const sendMessage = (socket: Socket, message: any) => {
  try {
    socket.to(message.roomId).emit(SocketEvents.receiveMessage, message)
    chatClient.createMessage({ message }, (err, msg) => {
      if (err) return socketErrorHandler(err)
      if (!msg) return new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'Send message failed.')
      console.log(msg)
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
    console.log('call room id')
    console.log(roomId)
    console.log(userId)
    console.log('all rooms')
    console.log(socket.rooms)

    socket.join(roomId)
    console.log('call room joined')
    const resData = { roomId, userId, id: socket.id }
    socket.to(roomId).emit(SocketEvents.callUserConnected, resData)
    console.log('___ ____ ____ ____ END ___ ___ ___ ___ ___\n')
  } catch (error) {
    socketErrorHandler(error)
  }
}

export const handleSignal = (socket: Socket, data: SignalDataType) => {
  try {
    const { roomId, caller, type, receiverId, user } = data
    console.log('handleSignal')
    console.log('signal type = ', type)
    console.log(user)
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
      console.log(`socket incoming cal signal send to ${receiverId}`)
    }
    console.log('___ ____ ____ ____ END ___ ___ ___ ___ ___\n')
  } catch (error) {
    socketErrorHandler(error)
  }
}


// * new socket events

export const callUser = (socket: Socket, data: CallUserEventDataType) => {
  try {
    console.log('\n -- calling user')
    const { signal, from, name, userToCall } = data
    socket.to(userToCall).emit(SocketEvents.callUser, {
      signal: signal,
      from: from,
      name: name
    })
  } catch (error) {
    socketErrorHandler(error)
  }
}


export const answerCall = (socket: Socket, data: AnswerCallEventDataType) => {
  try {
    console.log('\n -- call answered')
    socket.to(data.to).emit(SocketEvents.callAccepted, data.signal)
  } catch (error) {
    socketErrorHandler(error)
  }
}

export const leaveCall = (socket: Socket) => {
  try {
    console.log('\n -- call ended')
    socket.broadcast.emit(SocketEvents.callEnded)
  } catch (error) {
    socketErrorHandler(error)
  }
}

export const iceCandidate = (socket: Socket, data: IceCandidateDataType) => {
  try {
    console.log("\n -- ICE candidate exchange");
    console.log(data.to)
    socket.to(data.to).emit(SocketEvents.iceCandidate, data.candidate);
  } catch (error) {
    socketErrorHandler(error);
  }
}
