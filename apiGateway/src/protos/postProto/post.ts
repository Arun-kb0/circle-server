import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { PostServiceClient as _post_PostServiceClient, PostServiceDefinition as _post_PostServiceDefinition } from './post/PostService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  post: {
    Comment: MessageTypeDefinition
    CommentEnums: MessageTypeDefinition
    CreateCommentRequest: MessageTypeDefinition
    CreateCommentResponse: MessageTypeDefinition
    CreatePostRequest: MessageTypeDefinition
    CreatePostResponse: MessageTypeDefinition
    DeleteCommentRequest: MessageTypeDefinition
    DeleteCommentResponse: MessageTypeDefinition
    DeletePostRequest: MessageTypeDefinition
    DeletePostResponse: MessageTypeDefinition
    Image: MessageTypeDefinition
    Like: MessageTypeDefinition
    LikeRequest: MessageTypeDefinition
    LikeResponse: MessageTypeDefinition
    Media: EnumTypeDefinition
    Post: MessageTypeDefinition
    PostService: SubtypeConstructor<typeof grpc.Client, _post_PostServiceClient> & { service: _post_PostServiceDefinition }
    Report: MessageTypeDefinition
    ReportEnums: MessageTypeDefinition
    ReportPostRequest: MessageTypeDefinition
    ReportPostResponse: MessageTypeDefinition
    SavePostRequest: MessageTypeDefinition
    SavePostResponse: MessageTypeDefinition
    Saved: MessageTypeDefinition
    Status: EnumTypeDefinition
    UnlikeRequest: MessageTypeDefinition
    UnlikeResponse: MessageTypeDefinition
    UpdateCommentRequest: MessageTypeDefinition
    UpdateCommentResponse: MessageTypeDefinition
    UpdatePostRequest: MessageTypeDefinition
    UpdatePostResponse: MessageTypeDefinition
  }
}

