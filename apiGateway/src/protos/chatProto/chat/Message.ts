// Original file: src/proto/chat.proto

import type { _chat_MessageEnums_MediaType, _chat_MessageEnums_MediaType__Output } from '../chat/MessageEnums';
import type { _chat_MessageEnums_Status, _chat_MessageEnums_Status__Output } from '../chat/MessageEnums';

export interface Message {
  '_id'?: (string);
  'id'?: (string);
  'roomId'?: (string);
  'authorId'?: (string);
  'authorName'?: (string);
  'authorImage'?: (string);
  'receiverId'?: (string);
  'mediaType'?: (_chat_MessageEnums_MediaType);
  'message'?: (string);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'status'?: (_chat_MessageEnums_Status);
}

export interface Message__Output {
  '_id'?: (string);
  'id'?: (string);
  'roomId'?: (string);
  'authorId'?: (string);
  'authorName'?: (string);
  'authorImage'?: (string);
  'receiverId'?: (string);
  'mediaType'?: (_chat_MessageEnums_MediaType__Output);
  'message'?: (string);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  'status'?: (_chat_MessageEnums_Status__Output);
}
