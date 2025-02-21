// Original file: src/proto/chat.proto

import type { Message as _chat_Message, Message__Output as _chat_Message__Output } from '../chat/Message';

export interface UpdateMessageResponse {
  'message'?: (_chat_Message | null);
}

export interface UpdateMessageResponse__Output {
  'message'?: (_chat_Message__Output);
}
