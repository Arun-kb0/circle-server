// Original file: src/proto/chat.proto

import type { Chat as _chat_Chat, Chat__Output as _chat_Chat__Output } from '../chat/Chat';

export interface CreateMessageRequest {
  'chat'?: (_chat_Chat | null);
}

export interface CreateMessageRequest__Output {
  'chat'?: (_chat_Chat__Output);
}
