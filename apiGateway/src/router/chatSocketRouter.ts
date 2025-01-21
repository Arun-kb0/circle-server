import { Socket } from "socket.io";
import { joinRoom, sendMessage } from '../controller/chatController'
import { MessageType } from "../constants/types";


const chatSocketRouter = (socket: Socket) => {
  socket.on('join-room', (roomId: string) => joinRoom(socket, roomId))
  socket.on('send-message', (message: MessageType) => sendMessage(socket, message))
}

export default chatSocketRouter