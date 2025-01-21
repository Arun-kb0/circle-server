// Original file: src/proto/chat.proto


// Original file: src/proto/chat.proto

export const _chat_ChatEnums_MediaType = {
  text: 0,
  audio: 1,
  photo: 2,
} as const;

export type _chat_ChatEnums_MediaType =
  | 'text'
  | 0
  | 'audio'
  | 1
  | 'photo'
  | 2

export type _chat_ChatEnums_MediaType__Output = typeof _chat_ChatEnums_MediaType[keyof typeof _chat_ChatEnums_MediaType]

// Original file: src/proto/chat.proto

export const _chat_ChatEnums_Status = {
  sent: 0,
  received: 1,
  seen: 2,
} as const;

export type _chat_ChatEnums_Status =
  | 'sent'
  | 0
  | 'received'
  | 1
  | 'seen'
  | 2

export type _chat_ChatEnums_Status__Output = typeof _chat_ChatEnums_Status[keyof typeof _chat_ChatEnums_Status]

export interface ChatEnums {
}

export interface ChatEnums__Output {
}
