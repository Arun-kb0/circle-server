import { Socket } from "socket.io";
import { handleSignal, joinCallRoom, joinRoom, joinUserRoom, sendMessage } from '../controller/chatSocketController'
import { JoinCallRoomDataType, MessageType, SignalDataType } from "../constants/types";
import { SocketEvents } from '../constants/enums'

const chatSocketRouter = (socket: Socket) => {
  socket.on(SocketEvents.joinUserRoom, (friendsRoomId: string) => joinUserRoom(socket, friendsRoomId))

  socket.on(SocketEvents.joinRoom, (roomId: string) => joinRoom(socket, roomId))
  socket.on(SocketEvents.sendMessage, (message: MessageType) => sendMessage(socket, message))

  socket.on(SocketEvents.joinCallRoom, (data: JoinCallRoomDataType) => joinCallRoom(socket, data))
  socket.on(SocketEvents.signal, (data: SignalDataType) => handleSignal(socket, data))

}

export default chatSocketRouter