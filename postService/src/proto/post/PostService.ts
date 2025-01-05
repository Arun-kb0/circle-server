// Original file: src/proto/post.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CommentPostRequest as _post_CommentPostRequest, CommentPostRequest__Output as _post_CommentPostRequest__Output } from '../post/CommentPostRequest';
import type { CommentPostResponse as _post_CommentPostResponse, CommentPostResponse__Output as _post_CommentPostResponse__Output } from '../post/CommentPostResponse';
import type { CreatePostRequest as _post_CreatePostRequest, CreatePostRequest__Output as _post_CreatePostRequest__Output } from '../post/CreatePostRequest';
import type { CreatePostResponse as _post_CreatePostResponse, CreatePostResponse__Output as _post_CreatePostResponse__Output } from '../post/CreatePostResponse';
import type { DeletePostRequest as _post_DeletePostRequest, DeletePostRequest__Output as _post_DeletePostRequest__Output } from '../post/DeletePostRequest';
import type { DeletePostResponse as _post_DeletePostResponse, DeletePostResponse__Output as _post_DeletePostResponse__Output } from '../post/DeletePostResponse';
import type { GetGlobalFeedRequest as _post_GetGlobalFeedRequest, GetGlobalFeedRequest__Output as _post_GetGlobalFeedRequest__Output } from '../post/GetGlobalFeedRequest';
import type { GetGlobalFeedResponse as _post_GetGlobalFeedResponse, GetGlobalFeedResponse__Output as _post_GetGlobalFeedResponse__Output } from '../post/GetGlobalFeedResponse';
import type { GetUserFeedRequest as _post_GetUserFeedRequest, GetUserFeedRequest__Output as _post_GetUserFeedRequest__Output } from '../post/GetUserFeedRequest';
import type { GetUserFeedResponse as _post_GetUserFeedResponse, GetUserFeedResponse__Output as _post_GetUserFeedResponse__Output } from '../post/GetUserFeedResponse';
import type { LikePostRequest as _post_LikePostRequest, LikePostRequest__Output as _post_LikePostRequest__Output } from '../post/LikePostRequest';
import type { LikePostResponse as _post_LikePostResponse, LikePostResponse__Output as _post_LikePostResponse__Output } from '../post/LikePostResponse';
import type { UpdatePostRequest as _post_UpdatePostRequest, UpdatePostRequest__Output as _post_UpdatePostRequest__Output } from '../post/UpdatePostRequest';
import type { UpdatePostResponse as _post_UpdatePostResponse, UpdatePostResponse__Output as _post_UpdatePostResponse__Output } from '../post/UpdatePostResponse';

export interface PostServiceClient extends grpc.Client {
  CommentPost(argument: _post_CommentPostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_CommentPostResponse__Output>): grpc.ClientUnaryCall;
  CommentPost(argument: _post_CommentPostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_CommentPostResponse__Output>): grpc.ClientUnaryCall;
  CommentPost(argument: _post_CommentPostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_CommentPostResponse__Output>): grpc.ClientUnaryCall;
  CommentPost(argument: _post_CommentPostRequest, callback: grpc.requestCallback<_post_CommentPostResponse__Output>): grpc.ClientUnaryCall;
  commentPost(argument: _post_CommentPostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_CommentPostResponse__Output>): grpc.ClientUnaryCall;
  commentPost(argument: _post_CommentPostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_CommentPostResponse__Output>): grpc.ClientUnaryCall;
  commentPost(argument: _post_CommentPostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_CommentPostResponse__Output>): grpc.ClientUnaryCall;
  commentPost(argument: _post_CommentPostRequest, callback: grpc.requestCallback<_post_CommentPostResponse__Output>): grpc.ClientUnaryCall;
  
  CreatePost(argument: _post_CreatePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  CreatePost(argument: _post_CreatePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  CreatePost(argument: _post_CreatePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  CreatePost(argument: _post_CreatePostRequest, callback: grpc.requestCallback<_post_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  createPost(argument: _post_CreatePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  createPost(argument: _post_CreatePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  createPost(argument: _post_CreatePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  createPost(argument: _post_CreatePostRequest, callback: grpc.requestCallback<_post_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  
  DeletePost(argument: _post_DeletePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_DeletePostResponse__Output>): grpc.ClientUnaryCall;
  DeletePost(argument: _post_DeletePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_DeletePostResponse__Output>): grpc.ClientUnaryCall;
  DeletePost(argument: _post_DeletePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_DeletePostResponse__Output>): grpc.ClientUnaryCall;
  DeletePost(argument: _post_DeletePostRequest, callback: grpc.requestCallback<_post_DeletePostResponse__Output>): grpc.ClientUnaryCall;
  deletePost(argument: _post_DeletePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_DeletePostResponse__Output>): grpc.ClientUnaryCall;
  deletePost(argument: _post_DeletePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_DeletePostResponse__Output>): grpc.ClientUnaryCall;
  deletePost(argument: _post_DeletePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_DeletePostResponse__Output>): grpc.ClientUnaryCall;
  deletePost(argument: _post_DeletePostRequest, callback: grpc.requestCallback<_post_DeletePostResponse__Output>): grpc.ClientUnaryCall;
  
  GetGlobalFeed(argument: _post_GetGlobalFeedRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_GetGlobalFeedResponse__Output>): grpc.ClientUnaryCall;
  GetGlobalFeed(argument: _post_GetGlobalFeedRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_GetGlobalFeedResponse__Output>): grpc.ClientUnaryCall;
  GetGlobalFeed(argument: _post_GetGlobalFeedRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_GetGlobalFeedResponse__Output>): grpc.ClientUnaryCall;
  GetGlobalFeed(argument: _post_GetGlobalFeedRequest, callback: grpc.requestCallback<_post_GetGlobalFeedResponse__Output>): grpc.ClientUnaryCall;
  getGlobalFeed(argument: _post_GetGlobalFeedRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_GetGlobalFeedResponse__Output>): grpc.ClientUnaryCall;
  getGlobalFeed(argument: _post_GetGlobalFeedRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_GetGlobalFeedResponse__Output>): grpc.ClientUnaryCall;
  getGlobalFeed(argument: _post_GetGlobalFeedRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_GetGlobalFeedResponse__Output>): grpc.ClientUnaryCall;
  getGlobalFeed(argument: _post_GetGlobalFeedRequest, callback: grpc.requestCallback<_post_GetGlobalFeedResponse__Output>): grpc.ClientUnaryCall;
  
  GetUserFeed(argument: _post_GetUserFeedRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_GetUserFeedResponse__Output>): grpc.ClientUnaryCall;
  GetUserFeed(argument: _post_GetUserFeedRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_GetUserFeedResponse__Output>): grpc.ClientUnaryCall;
  GetUserFeed(argument: _post_GetUserFeedRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_GetUserFeedResponse__Output>): grpc.ClientUnaryCall;
  GetUserFeed(argument: _post_GetUserFeedRequest, callback: grpc.requestCallback<_post_GetUserFeedResponse__Output>): grpc.ClientUnaryCall;
  getUserFeed(argument: _post_GetUserFeedRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_GetUserFeedResponse__Output>): grpc.ClientUnaryCall;
  getUserFeed(argument: _post_GetUserFeedRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_GetUserFeedResponse__Output>): grpc.ClientUnaryCall;
  getUserFeed(argument: _post_GetUserFeedRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_GetUserFeedResponse__Output>): grpc.ClientUnaryCall;
  getUserFeed(argument: _post_GetUserFeedRequest, callback: grpc.requestCallback<_post_GetUserFeedResponse__Output>): grpc.ClientUnaryCall;
  
  LikePost(argument: _post_LikePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_LikePostResponse__Output>): grpc.ClientUnaryCall;
  LikePost(argument: _post_LikePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_LikePostResponse__Output>): grpc.ClientUnaryCall;
  LikePost(argument: _post_LikePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_LikePostResponse__Output>): grpc.ClientUnaryCall;
  LikePost(argument: _post_LikePostRequest, callback: grpc.requestCallback<_post_LikePostResponse__Output>): grpc.ClientUnaryCall;
  likePost(argument: _post_LikePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_LikePostResponse__Output>): grpc.ClientUnaryCall;
  likePost(argument: _post_LikePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_LikePostResponse__Output>): grpc.ClientUnaryCall;
  likePost(argument: _post_LikePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_LikePostResponse__Output>): grpc.ClientUnaryCall;
  likePost(argument: _post_LikePostRequest, callback: grpc.requestCallback<_post_LikePostResponse__Output>): grpc.ClientUnaryCall;
  
  UpdatePost(argument: _post_UpdatePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_UpdatePostResponse__Output>): grpc.ClientUnaryCall;
  UpdatePost(argument: _post_UpdatePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_UpdatePostResponse__Output>): grpc.ClientUnaryCall;
  UpdatePost(argument: _post_UpdatePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_UpdatePostResponse__Output>): grpc.ClientUnaryCall;
  UpdatePost(argument: _post_UpdatePostRequest, callback: grpc.requestCallback<_post_UpdatePostResponse__Output>): grpc.ClientUnaryCall;
  updatePost(argument: _post_UpdatePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_UpdatePostResponse__Output>): grpc.ClientUnaryCall;
  updatePost(argument: _post_UpdatePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_UpdatePostResponse__Output>): grpc.ClientUnaryCall;
  updatePost(argument: _post_UpdatePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_UpdatePostResponse__Output>): grpc.ClientUnaryCall;
  updatePost(argument: _post_UpdatePostRequest, callback: grpc.requestCallback<_post_UpdatePostResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface PostServiceHandlers extends grpc.UntypedServiceImplementation {
  CommentPost: grpc.handleUnaryCall<_post_CommentPostRequest__Output, _post_CommentPostResponse>;
  
  CreatePost: grpc.handleUnaryCall<_post_CreatePostRequest__Output, _post_CreatePostResponse>;
  
  DeletePost: grpc.handleUnaryCall<_post_DeletePostRequest__Output, _post_DeletePostResponse>;
  
  GetGlobalFeed: grpc.handleUnaryCall<_post_GetGlobalFeedRequest__Output, _post_GetGlobalFeedResponse>;
  
  GetUserFeed: grpc.handleUnaryCall<_post_GetUserFeedRequest__Output, _post_GetUserFeedResponse>;
  
  LikePost: grpc.handleUnaryCall<_post_LikePostRequest__Output, _post_LikePostResponse>;
  
  UpdatePost: grpc.handleUnaryCall<_post_UpdatePostRequest__Output, _post_UpdatePostResponse>;
  
}

export interface PostServiceDefinition extends grpc.ServiceDefinition {
  CommentPost: MethodDefinition<_post_CommentPostRequest, _post_CommentPostResponse, _post_CommentPostRequest__Output, _post_CommentPostResponse__Output>
  CreatePost: MethodDefinition<_post_CreatePostRequest, _post_CreatePostResponse, _post_CreatePostRequest__Output, _post_CreatePostResponse__Output>
  DeletePost: MethodDefinition<_post_DeletePostRequest, _post_DeletePostResponse, _post_DeletePostRequest__Output, _post_DeletePostResponse__Output>
  GetGlobalFeed: MethodDefinition<_post_GetGlobalFeedRequest, _post_GetGlobalFeedResponse, _post_GetGlobalFeedRequest__Output, _post_GetGlobalFeedResponse__Output>
  GetUserFeed: MethodDefinition<_post_GetUserFeedRequest, _post_GetUserFeedResponse, _post_GetUserFeedRequest__Output, _post_GetUserFeedResponse__Output>
  LikePost: MethodDefinition<_post_LikePostRequest, _post_LikePostResponse, _post_LikePostRequest__Output, _post_LikePostResponse__Output>
  UpdatePost: MethodDefinition<_post_UpdatePostRequest, _post_UpdatePostResponse, _post_UpdatePostRequest__Output, _post_UpdatePostResponse__Output>
}
