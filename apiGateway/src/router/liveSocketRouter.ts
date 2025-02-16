import { Socket } from "socket.io";
import { SocketEvents } from '../constants/enums'
import { liveStreamStart, liveStreamEnd, liveIceCandidate, answerLiveStream } from '../controller/liveSocketController'
import { AnswerLiveDataType, LiveIceCandidateDataType, LiveUserDataType } from "../constants/types";

const liveSocketRouter = (socket: Socket) => {

  socket.on(SocketEvents.liveStreamStarted, (data: LiveUserDataType) => liveStreamStart(socket, data))
  socket.on(SocketEvents.liveIceCandidate, (data: LiveIceCandidateDataType) => liveIceCandidate(socket, data))
  socket.on(SocketEvents.answerLiveStream, (data: AnswerLiveDataType) => answerLiveStream(socket, data))
  socket.on(SocketEvents.liveStreamEnded, () => liveStreamEnd(socket))

}

export default liveSocketRouter