import { Socket } from "socket.io";
import socketErrorHandler from '../middleware/socketErrorHandler'
import { SocketEvents } from "../constants/enums";
import { AnswerLiveDataType, LiveIceCandidateDataType, LiveMessageType, LiveUserDataType } from "../constants/types";
import liveUsersMap from '../util/liveUsersMap'

const createStreamRoomId = (userId: string) => {
  return `stream-${userId}`
}


export const liveStreamStart = (socket: Socket, data: LiveUserDataType) => {
  try {
    const socketId = liveUsersMap.get(data.userId)
    if (!socketId) throw new Error('socket id not found in liveUsersMap')
    const roomId = createStreamRoomId(socketId as string)
    socket.to(roomId).emit(SocketEvents.userLiveStreamStarted, {
      socketId: socket.id,
      ...data,
    })
  } catch (error) {
    socketErrorHandler(error)
  }
}

export const answerLiveStream = (socket: Socket, data: AnswerLiveDataType) => {
  try {
    const userId = socket.handshake.query.userId
    console.log(`Live stream answer received from ${socket.id}, forwarding to ${data.to}`);
    socket.to(data.to).emit(SocketEvents.answeredLiveStream, { signal: data.signal, userId });
  } catch (error) {
    socketErrorHandler(error);
  }
}

export const liveIceCandidate = (socket: Socket, data: LiveIceCandidateDataType) => {
  try {
    const socketId = liveUsersMap.get(data.streamerUserId)
    if (!socketId) throw new Error('socket id not found in liveUsersMap')
    const roomId = createStreamRoomId(socketId)
    socket.to(roomId).emit(SocketEvents.liveIceCandidate, data.candidate);
  } catch (error) {
    socketErrorHandler(error);
  }
}

export const liveStreamEnd = (socket: Socket, data: { userId: string }) => {
  try {
    const socketId = liveUsersMap.get(data.userId)
    if (!socketId) throw new Error('socket id not found in liveUsersMap')
    const roomId = createStreamRoomId(socketId)
    socket.to(roomId).emit(SocketEvents.userLiveStreamEnded, {
      socketId: socket.id,
    })
    liveUsersMap.delete(data.userId)
  } catch (error) {
    socketErrorHandler(error)
  }
}

export const prepareLiveStream = (socket: Socket, data: { userId: string }) => {
  try {
    const { userId } = data
    liveUsersMap.set(userId, socket.id)
    const roomId = createStreamRoomId(socket.id)
    socket.join(roomId)
  } catch (error) {
    socketErrorHandler(error);
  }
}

export const joinLiveRoom = (socket: Socket, data: { streamerId: string }) => {
  try {
    const userId = socket.handshake.query.userId
    const streamSocketId = liveUsersMap.get(data.streamerId)
    if (!streamSocketId) throw new Error('stream user socket id is undefined')
    const roomId = createStreamRoomId(streamSocketId)
    socket.join(roomId)
    socket.to(roomId).emit(SocketEvents.joinedRoomLive, { userId })
    console.log('roomId ',roomId)
  } catch (error) {
    socketErrorHandler(error);
  }
}

export const liveUserDisconnect = (socket: Socket, data: { streamerId: string }) => {
  try {
    const userId = socket.handshake.query.userId
    const streamSocketId = liveUsersMap.get(data.streamerId)
    if (!streamSocketId) throw new Error('stream user socket id is undefined')
    const roomId = createStreamRoomId(streamSocketId)
    socket.to(roomId).emit(SocketEvents.liveUserDisconnected, { userId })
    socket.leave(roomId)
  } catch (error) {
    socketErrorHandler(error);
  }
}

export const liveSendMessage = (socket: Socket, data: LiveMessageType) => {
  try {
    const streamSocketId = liveUsersMap.get(data.streamerId)
    if (!streamSocketId) throw new Error('stream user socket id is undefined')
    const roomId = createStreamRoomId(streamSocketId)
    console.log('roomId ', roomId)
    socket.to(roomId).emit(SocketEvents.liveReceiveMessage, data)
    console.log('inside live message send ')
  } catch (error) {
    socketErrorHandler(error);
  }
}