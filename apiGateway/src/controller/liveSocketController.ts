import { Socket } from "socket.io";
import socketErrorHandler from '../middleware/socketErrorHandler'
import { SocketEvents } from "../constants/enums";
import { AnswerLiveDataType, LiveIceCandidateDataType, LiveUserDataType } from "../constants/types";


export const liveStreamStart = (socket: Socket, data: LiveUserDataType) => {
  try {
    console.log(`Live stream started from ${socket.id}`);
    socket.broadcast.emit(SocketEvents.userLiveStreamStarted, {
      socketId: socket.id,
      ...data,
    })
  } catch (error) {
    socketErrorHandler(error)
  }
}

export const answerLiveStream = (socket: Socket, data: AnswerLiveDataType) => {
  try {
    console.log(`Live stream answer received from ${socket.id}, forwarding to ${data.to}`);
    // Forward the answer signal to the intended broadcaster socket.
    socket.to(data.to).emit(SocketEvents.answeredLiveStream, data.signal);
  } catch (error) {
    socketErrorHandler(error);
  }
}

export const liveIceCandidate = (socket: Socket, data: LiveIceCandidateDataType) => {
  try {
    console.log("\n -- Live ICE candidate exchange");
    socket.broadcast.emit(SocketEvents.liveIceCandidate, data.candidate);
  } catch (error) {
    socketErrorHandler(error);
  }
}

export const liveStreamEnd = (socket: Socket) => {
  try {
    console.log(`Live stream ended from ${socket.id}`);
    socket.broadcast.emit(SocketEvents.userLiveStreamEnded, {
      socketId: socket.id,
    })
  } catch (error) {
    socketErrorHandler(error)
  }
}
