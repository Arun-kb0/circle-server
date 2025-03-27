// Original file: src/proto/chat.proto

import type { Message as _chat_Message, Message__Output as _chat_Message__Output } from '../chat/Message';

export interface CreateMessageRequest {
  'message'?: (_chat_Message | null);
}

export interface CreateMessageRequest__Output {
  'message'?: (_chat_Message__Output);
}
