import { Socket } from "socket.io";
import { MessageType } from "../constants/types";

export const joinRoom = (socket: Socket, roomId: string) => {
  socket.join(roomId)
  console.log(`user id ${socket.id} joined roomId ${roomId}`)
}

export const sendMessage = (socket: Socket, message: MessageType) => {
  console.log(`user message data- ${message}`)
}