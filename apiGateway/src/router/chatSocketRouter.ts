import { Socket } from "socket.io";
import { answerCall, callUser, editMessage, handleSignal, iceCandidate, joinCallRoom, joinRoom, joinUserRoom, leaveCall, messageDeleted, sendMessage } from '../controller/chatSocketController'
import { AnswerCallEventDataType, CallUserEventDataType, IceCandidateDataType, JoinCallRoomDataType, MessageType, SignalDataType } from "../constants/types";
import { SocketEvents } from '../constants/enums'

const chatSocketRouter = (socket: Socket) => {
  socket.on(SocketEvents.joinUserRoom, (friendsRoomId: string) => joinUserRoom(socket, friendsRoomId))

  socket.on(SocketEvents.joinRoom, (roomId: string) => joinRoom(socket, roomId))
  socket.on(SocketEvents.sendMessage, (message: MessageType) => sendMessage(socket, message))
  socket.on(SocketEvents.messageDeleted, (message) => messageDeleted(socket, message))
  socket.on(SocketEvents.editMessage, (message) => editMessage(socket, message))

  socket.on(SocketEvents.joinCallRoom, (data: JoinCallRoomDataType) => joinCallRoom(socket, data))
  socket.on(SocketEvents.signal, (data: SignalDataType) => handleSignal(socket, data))

  socket.on(SocketEvents.iceCandidate, (data: IceCandidateDataType) => iceCandidate(socket, data))
  socket.on(SocketEvents.callUser, (data: CallUserEventDataType) => callUser(socket, data))
  socket.on(SocketEvents.answerCall, (data: AnswerCallEventDataType) => answerCall(socket, data))
  socket.on(SocketEvents.leaveCall, () => leaveCall(socket))
}

export default chatSocketRouter