import { Socket } from "socket.io";
import socketErrorHandler from '../middleware/socketErrorHandler'
import { SocketEvents } from "../constants/enums";
import { AnswerLiveDataType, LiveIceCandidateDataType, LiveMessageType, LiveUserDataType } from "../constants/types";
import liveUsersMap from '../util/liveUsersMap'
import { transports, router, mediaSoupOptions, producers } from '../config/mediaSoupOptions'
import { MediaKind } from "mediasoup/types";
import liveRoomUsers from '../util/liveRoomUsers'
import UserGrpcClient from "../config/UserGrpcClient";
import HttpError from "../util/HttpError";
import httpStatus from "../constants/httpStatus";

const userClient = UserGrpcClient.getClient()

const createStreamRoomId = (userId: string) => {
  return `stream-${userId}`
}


export const liveStreamStart = (socket: Socket, data: LiveUserDataType) => {
  try {
    const socketId = liveUsersMap.get(data.userId)
    if (!socketId) throw new Error('socket id not found in liveUsersMap')
    const roomId = createStreamRoomId(socketId as string)
    socket.to(roomId).emit(SocketEvents.userLiveStreamStarted, {
      socketId: socket.id,
      ...data,
    })
  } catch (error) {
    socketErrorHandler(error)
  }
}

export const answerLiveStream = (socket: Socket, data: AnswerLiveDataType) => {
  try {
    const userId = socket.handshake.query.userId
    console.log(`Live stream answer received from ${socket.id}, forwarding to ${data.to}`);
    socket.to(data.to).emit(SocketEvents.answeredLiveStream, { signal: data.signal, userId });
  } catch (error) {
    socketErrorHandler(error);
  }
}

export const liveIceCandidate = (socket: Socket, data: LiveIceCandidateDataType) => {
  try {
    const socketId = liveUsersMap.get(data.streamerUserId)
    if (!socketId) throw new Error('socket id not found in liveUsersMap')
    const roomId = createStreamRoomId(socketId)
    socket.to(roomId).emit(SocketEvents.liveIceCandidate, data.candidate);
  } catch (error) {
    socketErrorHandler(error);
  }
}

export const userLiveStreamEnded = (socket: Socket, data: { streamerUserId: string, }) => {
  try {
    const userId = socket.handshake.query.userId
    const socketId = liveUsersMap.get(data.streamerUserId)
    if (!socketId) throw new Error('socket id not found in liveUsersMap')
    const roomId = createStreamRoomId(socketId)

    const users = liveRoomUsers.get(roomId) || []
    const filteredUsers = users.filter(item => item.userId !== userId)
    liveRoomUsers.set(roomId, filteredUsers)
    socket.to(roomId).emit(SocketEvents.liveUserDisconnected, { userId, usersInStream: liveRoomUsers.get(roomId) })
  } catch (error) {
    socketErrorHandler(error);
  }
}

export const liveStreamEnd = (socket: Socket, data: { userId: string }) => {
  try {
    const socketId = liveUsersMap.get(data.userId)
    if (!socketId) throw new Error('socket id not found in liveUsersMap')
    const roomId = createStreamRoomId(socketId)
    // socket.to(roomId).emit(SocketEvents.userLiveStreamEnded, { socketId: socket.id })
    liveUsersMap.delete(data.userId)

    // * mediasoup
    if (producers[socket.id]) {
      producers[socket.id].close();
      delete producers[socket.id];
    }

    if (transports[socket.id]) {
      transports[socket.id].close();
      delete transports[socket.id];
    }

    const users = liveRoomUsers.get(roomId) || []
    const filteredUsers = users.filter(item => item.userId !== data.userId)
    liveRoomUsers.set(roomId, filteredUsers)
    socket.to(roomId).emit(SocketEvents.liveUserDisconnected, { userId: data.userId, usersInStream: [] })
    console.log(`Live stream ended for user: ${data.userId}`);
  } catch (error) {
    socketErrorHandler(error)
  }
}

export const prepareLiveStream = (socket: Socket, data: { userId: string, name: string }) => {
  try {
    const { userId } = data
    liveUsersMap.set(userId, socket.id)
    const roomId = createStreamRoomId(socket.id)
    socket.join(roomId)
    socket.broadcast.emit(SocketEvents.prepareLiveStream, data)
  } catch (error) {
    socketErrorHandler(error);
  }
}

export const joinLiveRoom = (socket: Socket, data: { streamerId: string }, callback: any) => {
  try {
    const userId = socket.handshake.query.userId
    const streamSocketId = liveUsersMap.get(data.streamerId)
    if (!streamSocketId) throw new Error('stream user socket id is undefined')
    const roomId = createStreamRoomId(streamSocketId)
    socket.join(roomId)

    userClient.getUser({ userId: userId as string }, (err, msg) => {
      if (err) return new HttpError(httpStatus.INTERNAL_SERVER_ERROR, err?.message)
      if (!msg || !msg.user) return new HttpError(httpStatus.NOT_FOUND, 'no user found')
      const users = liveRoomUsers.get(roomId) || []
      users.push({
        userId: msg.user._id as string,
        name: msg.user.name as string,
        image: msg.user.image?.url
      })
      liveRoomUsers.set(roomId, users)
      socket.to(roomId).emit(SocketEvents.joinedRoomLive, { userId, usersInStream: liveRoomUsers.get(roomId) })
      callback({ userId, usersInStream: liveRoomUsers.get(roomId) })
      console.log('roomId ', roomId)
    })
  } catch (error) {
    socketErrorHandler(error);
  }
}

export const liveUserDisconnect = (socket: Socket, data: { streamerId: string }) => {
  try {
    const userId = socket.handshake.query.userId
    const streamSocketId = liveUsersMap.get(data.streamerId)
    if (!streamSocketId) throw new Error('stream user socket id is undefined')
    const roomId = createStreamRoomId(streamSocketId)
    const users = liveRoomUsers.get(roomId) || []
    const filteredUsers = users.filter(item => item.userId !== userId)
    liveRoomUsers.set(roomId, filteredUsers)
    socket.to(roomId).emit(SocketEvents.liveUserDisconnected, { userId, usersInStream: liveRoomUsers.get(roomId) })
    socket.leave(roomId)
  } catch (error) {
    socketErrorHandler(error);
  }
}

export const liveSendMessage = (socket: Socket, data: LiveMessageType) => {
  try {
    const streamSocketId = liveUsersMap.get(data.streamerId)
    if (!streamSocketId) throw new Error('stream user socket id is undefined')
    const roomId = createStreamRoomId(streamSocketId)
    console.log('roomId ', roomId)
    socket.to(roomId).emit(SocketEvents.liveReceiveMessage, data)
    console.log('inside live message send ')
  } catch (error) {
    socketErrorHandler(error);
  }
}


// * mediasoup
export const mediaSoupGetRouterRtpCapabilities = async (socket: Socket, data: any, callback: (params: any) => void) => {
  try {
    console.log('typeof callback', typeof callback)
    console.log('typeof data', typeof data)
    callback(router.rtpCapabilities);
  } catch (error: any) {
    console.error('Error creating WebRTC transport', error);
    if (error instanceof Error) callback({ error: error.message });
    else callback({ error: error.name })
  }
}

export const mediaSoupCreateWebRtcTransport = async (socket: Socket, data: any, callback: (params: any) => void) => {
  try {
    console.log('mediaSoupCreateWebRtcTransport function')
    console.log(data)
    console.log(typeof callback)
    const transport = await router.createWebRtcTransport({
      listenIps: [{
        ip: "0.0.0.0",
        announcedIp: '127.0.0.1'
      }],
      enableUdp: true,
      enableTcp: true,
      preferUdp: true,
    });

    transports[socket.id] = transport;

    callback({
      id: transport.id,
      iceParameters: transport.iceParameters,
      iceCandidates: transport.iceCandidates,
      dtlsParameters: transport.dtlsParameters,
    });
  } catch (error: any) {
    console.error('Error creating WebRTC transport', error);
    if (error instanceof Error) callback({ error: error.message });
    else callback({ error: error.name })
  }
}

export const mediaSoupConnectWebRtcTransport = async (socket: Socket, data: any, callback: (params: any) => void) => {
  const transport = transports[socket.id];
  if (!transport) {
    return callback({ error: "Transport not found" });
  }
  console.log('transport.dtlsState = ', transport.dtlsState)
  if (data.dtlsState === 'connected') {
    return callback({ error: 'Transport is already connected' });
  }
  try {
    await transport.connect({ dtlsParameters: data.dtlsParameters });
    callback({ success: true });
  } catch (error) {
    console.error("Error connecting transport:", error);
    if (error instanceof Error) callback({ error: error.message });
  }
}

export const mediaSoupProduce = async (socket: Socket, data: { kind: string; rtpParameters: any }, callback: (res: any) => void) => {
  const transport = transports[socket.id];
  if (!transport) {
    return callback({ error: "Transport not found" });
  }

  try {
    const producer = await transport.produce({
      kind: data.kind as MediaKind,
      rtpParameters: data.rtpParameters,
    });

    producers[socket.id] = producer;
    callback({ id: producer.id });
  } catch (error: any) {
    console.error('Error producing media', error);
    callback({ error: error.message });
  }
}

export const mediaSoupConsume = async (socket: Socket, data: { rtpCapabilities: any }, callback: (res: any) => void) => {
  try {
    const firstProducer = Object.values(producers)[0];
    if (!firstProducer) {
      return callback({ error: 'No producer available' });
    }
    if (!router.canConsume({ producerId: firstProducer.id, rtpCapabilities: data.rtpCapabilities })) {
      return callback({ error: 'Cannot consume' });
    }
    const transport = transports[socket.id];
    if (!transport) {
      return callback({ error: 'Transport not found' });
    }
    const consumer = await transport.consume({
      producerId: firstProducer.id,
      rtpCapabilities: data.rtpCapabilities,
      paused: true,
    });

    consumer.on('transportclose', () => {
      console.log('transport closed by the consumer')
    })
    consumer.on('producerclose', () => {
      console.log('producer of consumer closed')
    })

    callback({
      id: consumer.id,
      producerId: firstProducer.id,
      kind: consumer.kind,
      rtpParameters: consumer.rtpParameters,
    });

    socket.on(SocketEvents.mediaSoupConsumerResume, async () => {
      await consumer.resume()
    })
  } catch (error: any) {
    console.error('Error consuming media', error);
    callback({ error: error.message });
  }
}

export const mediaSoupDisconnect = (socket: Socket) => {
  console.log(`Client disconnected: ${socket.id}`);
  if (transports[socket.id]) {
    transports[socket.id].close();
    delete transports[socket.id];
  }
  if (producers[socket.id]) {
    producers[socket.id].close();
    delete producers[socket.id];
  }
}
