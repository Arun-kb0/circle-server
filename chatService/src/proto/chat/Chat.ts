// Original file: src/proto/chat.proto

import type { _chat_ChatEnums_MediaType, _chat_ChatEnums_MediaType__Output } from '../chat/ChatEnums';
import type { _chat_ChatEnums_Status, _chat_ChatEnums_Status__Output } from '../chat/ChatEnums';

export interface Chat {
  '_id'?: (string);
  'id'?: (string);
  'roomId'?: (string);
  'authorId'?: (string);
  'authorName'?: (string);
  'authorImage'?: (string);
  'receiverId'?: (string);
  'mediaType'?: (_chat_ChatEnums_MediaType);
  'message'?: (string);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'status'?: (_chat_ChatEnums_Status);
}

export interface Chat__Output {
  '_id'?: (string);
  'id'?: (string);
  'roomId'?: (string);
  'authorId'?: (string);
  'authorName'?: (string);
  'authorImage'?: (string);
  'receiverId'?: (string);
  'mediaType'?: (_chat_ChatEnums_MediaType__Output);
  'message'?: (string);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'status'?: (_chat_ChatEnums_Status__Output);
}
