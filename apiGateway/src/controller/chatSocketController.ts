import { Socket } from "socket.io";
import ChatGrpcClient from '../config/ChatGrpcClient'
import socketErrorHandler from '../middleware/socketErrorHandler'
import HttpError from "../util/HttpError";
import httpStatus from "../constants/httpStatus";
import { Request } from "express";

const chatClient = ChatGrpcClient.getClient()

console.log('chat controller')
ChatGrpcClient.IsClientConnected()


export const joinRoom = (socket: Socket, chatRoom: any) => {
  console.log(`user id ${socket.id} joined roomId ${chatRoom.roomId}`)
  chatClient.createRoom({ chatRoom }, (err, msg) => {
    if (err) return socketErrorHandler(err)
    if (!msg) return new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'post not created.')
    console.log(msg)
  })
  socket.join(chatRoom.roomId)
}

export const sendMessage = (socket: Socket, message: any) => {
  try {
    socket.to(message.roomId).emit("receive-message", message)
    chatClient.createMessage({ message }, (err, msg) => {
      if (err) return socketErrorHandler(err)
      if (!msg) return new HttpError(httpStatus.INTERNAL_SERVER_ERROR, 'post not created.')
      console.log(msg)
    })
  } catch (error) {
    socketErrorHandler(error)
  }
}


