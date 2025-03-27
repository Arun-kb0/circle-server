// Original file: src/proto/chat.proto

import type { Message as _chat_Message, Message__Output as _chat_Message__Output } from '../chat/Message';

export interface UpdateMessageRequest {
  'messageId'?: (string);
  'message'?: (_chat_Message | null);
}

export interface UpdateMessageRequest__Output {
  'messageId'?: (string);
  'message'?: (_chat_Message__Output);
}
