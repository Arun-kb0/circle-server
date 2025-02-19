import { Socket } from "socket.io";
import { SocketEvents } from '../constants/enums'
import { liveStreamStart, liveStreamEnd, liveIceCandidate, answerLiveStream, joinLiveRoom, prepareLiveStream, liveUserDisconnect } from '../controller/liveSocketController'
import { AnswerLiveDataType, LiveIceCandidateDataType, LiveUserDataType } from "../constants/types";

const liveSocketRouter = (socket: Socket) => {

  socket.on(SocketEvents.liveStreamStarted, (data: LiveUserDataType) => liveStreamStart(socket, data))
  socket.on(SocketEvents.liveIceCandidate, (data: LiveIceCandidateDataType) => liveIceCandidate(socket, data))
  socket.on(SocketEvents.answerLiveStream, (data: AnswerLiveDataType) => answerLiveStream(socket, data))
  socket.on(SocketEvents.liveStreamEnded, (data: { userId: string }) => liveStreamEnd(socket, data))

  socket.on(SocketEvents.prepareLiveStream, (data) => prepareLiveStream(socket, data))
  socket.on(SocketEvents.joinRoomLive, (data) => joinLiveRoom(socket, data))
  socket.on(SocketEvents.liveUserDisconnect, (data) => liveUserDisconnect(socket, data))
}

export default liveSocketRouter