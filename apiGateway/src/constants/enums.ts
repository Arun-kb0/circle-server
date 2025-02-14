
export enum SocketEvents {
  getOnlineUsers = 'get-online-users',

  // * user
  joinUserRoom = 'join-user-room',
  userRoomNotification = 'user-room-notification',

  // * chat
  joinRoom = 'join-room',
  sendMessage = 'send-message',
  receiveMessage = 'receive-message',

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
  me = "me"
} 