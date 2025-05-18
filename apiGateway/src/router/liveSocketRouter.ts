import { Socket } from "socket.io";
import { SocketEvents } from '../constants/enums'
import {
  liveStreamStart, liveStreamEnd, liveIceCandidate,
  answerLiveStream, joinLiveRoom, prepareLiveStream,
  liveUserDisconnect, liveSendMessage,
  mediaSoupConsume, mediaSoupCreateWebRtcTransport, mediaSoupDisconnect,
  mediaSoupProduce,
  mediaSoupGetRouterRtpCapabilities,
  mediaSoupConnectWebRtcTransport,
  userLiveStreamEnded,
  mediaSoupConsumerResume,
} from '../controller/liveSocketController'
import { AnswerLiveDataType, LiveIceCandidateDataType, LiveUserDataType } from "../constants/types";

const liveSocketRouter = (socket: Socket) => {

  socket.on(SocketEvents.liveIceCandidate, (data: LiveIceCandidateDataType) => liveIceCandidate(socket, data))
  socket.on(SocketEvents.answerLiveStream, (data: AnswerLiveDataType) => answerLiveStream(socket, data))

  socket.on(SocketEvents.liveStreamStarted, (data: LiveUserDataType) => liveStreamStart(socket, data))
  socket.on(SocketEvents.liveStreamEnded, (data: { userId: string }) => liveStreamEnd(socket, data))
  socket.on(SocketEvents.userLiveStreamEnded, (data: any) => userLiveStreamEnded(socket, data))
  socket.on(SocketEvents.prepareLiveStream, (data) => prepareLiveStream(socket, data))
  socket.on(SocketEvents.joinRoomLive, (data, callback) => joinLiveRoom(socket, data, callback))
  socket.on(SocketEvents.liveUserDisconnect, (data) => liveUserDisconnect(socket, data))
  socket.on(SocketEvents.liveSendMessage, (data) => liveSendMessage(socket, data))

  socket.on(SocketEvents.mediaSoupGetRouterRtpCapabilities, (data, callback) => mediaSoupGetRouterRtpCapabilities(socket, data, callback))
  socket.on(SocketEvents.mediaSoupConnectWebRtcTransport, (data, callback) => mediaSoupConnectWebRtcTransport(socket, data, callback))
  socket.on(SocketEvents.mediaSoupCreateWebRtcTransport, (data, callback) => mediaSoupCreateWebRtcTransport(socket, data, callback))
  socket.on(SocketEvents.mediaSoupProduce, (data, callback) => mediaSoupProduce(socket, data, callback))
  socket.on(SocketEvents.mediaSoupConsume, (data, callback) => mediaSoupConsume(socket, data, callback))
  socket.on(SocketEvents.mediaSoupDisconnect, () => mediaSoupDisconnect(socket))
  socket.on(SocketEvents.mediaSoupConsumerResume, (data, callback) => mediaSoupConsumerResume(socket, data, callback))

}

export default liveSocketRouter