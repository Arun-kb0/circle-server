// Original file: src/proto/chat.proto


// Original file: src/proto/chat.proto

export const _chat_MessageEnums_MediaType = {
  text: 0,
  audio: 1,
  photo: 2,
} as const;

export type _chat_MessageEnums_MediaType =
  | 'text'
  | 0
  | 'audio'
  | 1
  | 'photo'
  | 2

export type _chat_MessageEnums_MediaType__Output = typeof _chat_MessageEnums_MediaType[keyof typeof _chat_MessageEnums_MediaType]

// Original file: src/proto/chat.proto

export const _chat_MessageEnums_Status = {
  sent: 0,
  received: 1,
  seen: 2,
} as const;

export type _chat_MessageEnums_Status =
  | 'sent'
  | 0
  | 'received'
  | 1
  | 'seen'
  | 2

export type _chat_MessageEnums_Status__Output = typeof _chat_MessageEnums_Status[keyof typeof _chat_MessageEnums_Status]

export interface MessageEnums {
}

export interface MessageEnums__Output {
}
