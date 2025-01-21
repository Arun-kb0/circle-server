// Original file: src/proto/chat.proto

import type { Chat as _chat_Chat, Chat__Output as _chat_Chat__Output } from '../chat/Chat';

export interface UpdateMessageRequest {
  'chat'?: (_chat_Chat | null);
}

export interface UpdateMessageRequest__Output {
  'chat'?: (_chat_Chat__Output);
}
