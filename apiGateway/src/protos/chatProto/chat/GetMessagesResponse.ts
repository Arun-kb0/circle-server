// Original file: src/proto/chat.proto

import type { Message as _chat_Message, Message__Output as _chat_Message__Output } from '../chat/Message';

export interface GetMessagesResponse {
  'messages'?: (_chat_Message)[];
  'numberOfPages'?: (number);
  'currentPage'?: (number);
}

export interface GetMessagesResponse__Output {
  'messages'?: (_chat_Message__Output)[];
  'numberOfPages'?: (number);
  'currentPage'?: (number);
}
