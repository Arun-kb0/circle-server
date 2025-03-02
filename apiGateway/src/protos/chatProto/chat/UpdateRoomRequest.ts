// Original file: src/proto/chat.proto

import type { ChatRoom as _chat_ChatRoom, ChatRoom__Output as _chat_ChatRoom__Output } from '../chat/ChatRoom';

export interface UpdateRoomRequest {
  'roomId'?: (string);
  'chatRoom'?: (_chat_ChatRoom | null);
}

export interface UpdateRoomRequest__Output {
  'roomId'?: (string);
  'chatRoom'?: (_chat_ChatRoom__Output);
}
