import { Socket } from "socket.io";
import { MessageType } from "../constants/types";

export const joinRoom = (socket: Socket, roomId: string) => {
  console.log(`user id ${socket.id} joined roomId ${roomId}`)
  socket.join(roomId)
}

export const sendMessage = (socket: Socket, message: MessageType) => {
  console.log(`user message data- ${message}`)
  socket.to(message.roomId).emit("receive-message", message)
}