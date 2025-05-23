
export enum SocketEvents {
  getOnlineUsers = 'get-online-users',

  // * user
  joinUserRoom = 'join-user-room',
  userRoomNotification = 'user-room-notification',

  // * chat
  joinRoom = 'join-room',
  sendMessage = 'send-message',
  receiveMessage = 'receive-message',
  messageDeleted = 'message-deleted',
  editMessage = 'edit-message',
  messageTyping = 'message-typing',
  messageTypingStopped = 'message-typing-stopped',

  // * call
  joinCallRoom = 'join-call-room',
  callUserConnected = 'call-user-connected',
  signal = 'signal',
  callStarted = 'call-started',

  // * new call events
  callEnded = 'call-ended',
  callUser = 'call-user',
  answerCall = 'answer-call',
  callAccepted = 'call-accepted',
  leaveCall = 'leave-call',
  iceCandidate = 'ice-candidate',
  me = "me",

  // * live stream
  liveStreamStarted = 'live-stream-started',
  liveStreamEnded = 'live-stream-ended',
  userLiveStreamStarted = 'user-live-stream-started',
  userLiveStreamEnded = 'user-live-stream-ended',
  liveIceCandidate = 'live-ice-candidate',
  answerLiveStream = 'answer-live-stream',
  answeredLiveStream = 'answered-live-stream',
  joinRoomLive = 'join-room-live',
  joinedRoomLive = 'joined-room-live',
  prepareLiveStream = 'prepare-live-stream',
  liveUserDisconnect = 'live-user-disconnect',
  liveUserDisconnected = 'live-user-disconnected',

  liveSendMessage = 'live-send-message',
  liveReceiveMessage = 'live-receive-message',

  // * mediasoup
  mediaSoupGetRouterRtpCapabilities = 'mediasoup-get-route-rtp-capabilities',
  mediaSoupConnectWebRtcTransport = 'mediasoup-connect-webrtc-transport',
  mediaSoupCreateWebRtcTransport = 'mediasoup-create-webrtc-transport',
  mediaSoupProduce = 'mediasoup-produce',
  mediaSoupConsume = 'mediasoup-consume',
  mediaSoupDisconnect = 'mediasoup-disconnect',
  mediaSoupConsumerResume= 'mediasoup-consumer-resumer'
} 