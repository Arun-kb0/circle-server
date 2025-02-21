// Original file: src/proto/post.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateCommentRequest as _post_CreateCommentRequest, CreateCommentRequest__Output as _post_CreateCommentRequest__Output } from '../post/CreateCommentRequest';
import type { CreateCommentResponse as _post_CreateCommentResponse, CreateCommentResponse__Output as _post_CreateCommentResponse__Output } from '../post/CreateCommentResponse';
import type { CreatePostRequest as _post_CreatePostRequest, CreatePostRequest__Output as _post_CreatePostRequest__Output } from '../post/CreatePostRequest';
import type { CreatePostResponse as _post_CreatePostResponse, CreatePostResponse__Output as _post_CreatePostResponse__Output } from '../post/CreatePostResponse';
import type { DeleteCommentRequest as _post_DeleteCommentRequest, DeleteCommentRequest__Output as _post_DeleteCommentRequest__Output } from '../post/DeleteCommentRequest';
import type { DeleteCommentResponse as _post_DeleteCommentResponse, DeleteCommentResponse__Output as _post_DeleteCommentResponse__Output } from '../post/DeleteCommentResponse';
import type { DeletePostRequest as _post_DeletePostRequest, DeletePostRequest__Output as _post_DeletePostRequest__Output } from '../post/DeletePostRequest';
import type { DeletePostResponse as _post_DeletePostResponse, DeletePostResponse__Output as _post_DeletePostResponse__Output } from '../post/DeletePostResponse';
import type { LikeRequest as _post_LikeRequest, LikeRequest__Output as _post_LikeRequest__Output } from '../post/LikeRequest';
import type { LikeResponse as _post_LikeResponse, LikeResponse__Output as _post_LikeResponse__Output } from '../post/LikeResponse';
import type { UnlikeRequest as _post_UnlikeRequest, UnlikeRequest__Output as _post_UnlikeRequest__Output } from '../post/UnlikeRequest';
import type { UnlikeResponse as _post_UnlikeResponse, UnlikeResponse__Output as _post_UnlikeResponse__Output } from '../post/UnlikeResponse';
import type { UpdateCommentRequest as _post_UpdateCommentRequest, UpdateCommentRequest__Output as _post_UpdateCommentRequest__Output } from '../post/UpdateCommentRequest';
import type { UpdateCommentResponse as _post_UpdateCommentResponse, UpdateCommentResponse__Output as _post_UpdateCommentResponse__Output } from '../post/UpdateCommentResponse';
import type { UpdatePostRequest as _post_UpdatePostRequest, UpdatePostRequest__Output as _post_UpdatePostRequest__Output } from '../post/UpdatePostRequest';
import type { UpdatePostResponse as _post_UpdatePostResponse, UpdatePostResponse__Output as _post_UpdatePostResponse__Output } from '../post/UpdatePostResponse';

export interface PostServiceClient extends grpc.Client {
  CreateComment(argument: _post_CreateCommentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_CreateCommentResponse__Output>): grpc.ClientUnaryCall;
  CreateComment(argument: _post_CreateCommentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_CreateCommentResponse__Output>): grpc.ClientUnaryCall;
  CreateComment(argument: _post_CreateCommentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_CreateCommentResponse__Output>): grpc.ClientUnaryCall;
  CreateComment(argument: _post_CreateCommentRequest, callback: grpc.requestCallback<_post_CreateCommentResponse__Output>): grpc.ClientUnaryCall;
  createComment(argument: _post_CreateCommentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_CreateCommentResponse__Output>): grpc.ClientUnaryCall;
  createComment(argument: _post_CreateCommentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_CreateCommentResponse__Output>): grpc.ClientUnaryCall;
  createComment(argument: _post_CreateCommentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_CreateCommentResponse__Output>): grpc.ClientUnaryCall;
  createComment(argument: _post_CreateCommentRequest, callback: grpc.requestCallback<_post_CreateCommentResponse__Output>): grpc.ClientUnaryCall;
  
  CreatePost(argument: _post_CreatePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  CreatePost(argument: _post_CreatePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  CreatePost(argument: _post_CreatePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  CreatePost(argument: _post_CreatePostRequest, callback: grpc.requestCallback<_post_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  createPost(argument: _post_CreatePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  createPost(argument: _post_CreatePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  createPost(argument: _post_CreatePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  createPost(argument: _post_CreatePostRequest, callback: grpc.requestCallback<_post_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteComment(argument: _post_DeleteCommentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_DeleteCommentResponse__Output>): grpc.ClientUnaryCall;
  DeleteComment(argument: _post_DeleteCommentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_DeleteCommentResponse__Output>): grpc.ClientUnaryCall;
  DeleteComment(argument: _post_DeleteCommentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_DeleteCommentResponse__Output>): grpc.ClientUnaryCall;
  DeleteComment(argument: _post_DeleteCommentRequest, callback: grpc.requestCallback<_post_DeleteCommentResponse__Output>): grpc.ClientUnaryCall;
  deleteComment(argument: _post_DeleteCommentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_DeleteCommentResponse__Output>): grpc.ClientUnaryCall;
  deleteComment(argument: _post_DeleteCommentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_DeleteCommentResponse__Output>): grpc.ClientUnaryCall;
  deleteComment(argument: _post_DeleteCommentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_DeleteCommentResponse__Output>): grpc.ClientUnaryCall;
  deleteComment(argument: _post_DeleteCommentRequest, callback: grpc.requestCallback<_post_DeleteCommentResponse__Output>): grpc.ClientUnaryCall;
  
  DeletePost(argument: _post_DeletePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_DeletePostResponse__Output>): grpc.ClientUnaryCall;
  DeletePost(argument: _post_DeletePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_DeletePostResponse__Output>): grpc.ClientUnaryCall;
  DeletePost(argument: _post_DeletePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_DeletePostResponse__Output>): grpc.ClientUnaryCall;
  DeletePost(argument: _post_DeletePostRequest, callback: grpc.requestCallback<_post_DeletePostResponse__Output>): grpc.ClientUnaryCall;
  deletePost(argument: _post_DeletePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_DeletePostResponse__Output>): grpc.ClientUnaryCall;
  deletePost(argument: _post_DeletePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_DeletePostResponse__Output>): grpc.ClientUnaryCall;
  deletePost(argument: _post_DeletePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_DeletePostResponse__Output>): grpc.ClientUnaryCall;
  deletePost(argument: _post_DeletePostRequest, callback: grpc.requestCallback<_post_DeletePostResponse__Output>): grpc.ClientUnaryCall;
  
  Like(argument: _post_LikeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_LikeResponse__Output>): grpc.ClientUnaryCall;
  Like(argument: _post_LikeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_LikeResponse__Output>): grpc.ClientUnaryCall;
  Like(argument: _post_LikeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_LikeResponse__Output>): grpc.ClientUnaryCall;
  Like(argument: _post_LikeRequest, callback: grpc.requestCallback<_post_LikeResponse__Output>): grpc.ClientUnaryCall;
  like(argument: _post_LikeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_LikeResponse__Output>): grpc.ClientUnaryCall;
  like(argument: _post_LikeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_LikeResponse__Output>): grpc.ClientUnaryCall;
  like(argument: _post_LikeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_LikeResponse__Output>): grpc.ClientUnaryCall;
  like(argument: _post_LikeRequest, callback: grpc.requestCallback<_post_LikeResponse__Output>): grpc.ClientUnaryCall;
  
  UnLike(argument: _post_UnlikeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_UnlikeResponse__Output>): grpc.ClientUnaryCall;
  UnLike(argument: _post_UnlikeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_UnlikeResponse__Output>): grpc.ClientUnaryCall;
  UnLike(argument: _post_UnlikeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_UnlikeResponse__Output>): grpc.ClientUnaryCall;
  UnLike(argument: _post_UnlikeRequest, callback: grpc.requestCallback<_post_UnlikeResponse__Output>): grpc.ClientUnaryCall;
  unLike(argument: _post_UnlikeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_UnlikeResponse__Output>): grpc.ClientUnaryCall;
  unLike(argument: _post_UnlikeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_UnlikeResponse__Output>): grpc.ClientUnaryCall;
  unLike(argument: _post_UnlikeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_UnlikeResponse__Output>): grpc.ClientUnaryCall;
  unLike(argument: _post_UnlikeRequest, callback: grpc.requestCallback<_post_UnlikeResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateComment(argument: _post_UpdateCommentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_UpdateCommentResponse__Output>): grpc.ClientUnaryCall;
  UpdateComment(argument: _post_UpdateCommentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_UpdateCommentResponse__Output>): grpc.ClientUnaryCall;
  UpdateComment(argument: _post_UpdateCommentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_UpdateCommentResponse__Output>): grpc.ClientUnaryCall;
  UpdateComment(argument: _post_UpdateCommentRequest, callback: grpc.requestCallback<_post_UpdateCommentResponse__Output>): grpc.ClientUnaryCall;
  updateComment(argument: _post_UpdateCommentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_post_UpdateCommentResponse__Output>): grpc.ClientUnaryCall;
  updateComment(argument: _post_UpdateCommentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_post_UpdateCommentResponse__Output>): grpc.ClientUnaryCall;
  updateComment(argument: _post_UpdateCommentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_post_UpdateCommentResponse__Output>): grpc.ClientUnaryCall;
  updateComment(argument: _post_UpdateCommentRequest, callback: grpc.requestCallback<_post_UpdateCommentResponse__Output>): grpc.ClientUnaryCall;
  
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
  CreateComment: grpc.handleUnaryCall<_post_CreateCommentRequest__Output, _post_CreateCommentResponse>;
  
  CreatePost: grpc.handleUnaryCall<_post_CreatePostRequest__Output, _post_CreatePostResponse>;
  
  DeleteComment: grpc.handleUnaryCall<_post_DeleteCommentRequest__Output, _post_DeleteCommentResponse>;
  
  DeletePost: grpc.handleUnaryCall<_post_DeletePostRequest__Output, _post_DeletePostResponse>;
  
  Like: grpc.handleUnaryCall<_post_LikeRequest__Output, _post_LikeResponse>;
  
  UnLike: grpc.handleUnaryCall<_post_UnlikeRequest__Output, _post_UnlikeResponse>;
  
  UpdateComment: grpc.handleUnaryCall<_post_UpdateCommentRequest__Output, _post_UpdateCommentResponse>;
  
  UpdatePost: grpc.handleUnaryCall<_post_UpdatePostRequest__Output, _post_UpdatePostResponse>;
  
}

export interface PostServiceDefinition extends grpc.ServiceDefinition {
  CreateComment: MethodDefinition<_post_CreateCommentRequest, _post_CreateCommentResponse, _post_CreateCommentRequest__Output, _post_CreateCommentResponse__Output>
  CreatePost: MethodDefinition<_post_CreatePostRequest, _post_CreatePostResponse, _post_CreatePostRequest__Output, _post_CreatePostResponse__Output>
  DeleteComment: MethodDefinition<_post_DeleteCommentRequest, _post_DeleteCommentResponse, _post_DeleteCommentRequest__Output, _post_DeleteCommentResponse__Output>
  DeletePost: MethodDefinition<_post_DeletePostRequest, _post_DeletePostResponse, _post_DeletePostRequest__Output, _post_DeletePostResponse__Output>
  Like: MethodDefinition<_post_LikeRequest, _post_LikeResponse, _post_LikeRequest__Output, _post_LikeResponse__Output>
  UnLike: MethodDefinition<_post_UnlikeRequest, _post_UnlikeResponse, _post_UnlikeRequest__Output, _post_UnlikeResponse__Output>
  UpdateComment: MethodDefinition<_post_UpdateCommentRequest, _post_UpdateCommentResponse, _post_UpdateCommentRequest__Output, _post_UpdateCommentResponse__Output>
  UpdatePost: MethodDefinition<_post_UpdatePostRequest, _post_UpdatePostResponse, _post_UpdatePostRequest__Output, _post_UpdatePostResponse__Output>
}
