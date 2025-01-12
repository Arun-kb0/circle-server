// Original file: src/proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { BlockUserRequest as _user_BlockUserRequest, BlockUserRequest__Output as _user_BlockUserRequest__Output } from '../user/BlockUserRequest';
import type { BlockUserResponse as _user_BlockUserResponse, BlockUserResponse__Output as _user_BlockUserResponse__Output } from '../user/BlockUserResponse';
import type { DeleteUserRequest as _user_DeleteUserRequest, DeleteUserRequest__Output as _user_DeleteUserRequest__Output } from '../user/DeleteUserRequest';
import type { DeleteUserResponse as _user_DeleteUserResponse, DeleteUserResponse__Output as _user_DeleteUserResponse__Output } from '../user/DeleteUserResponse';
import type { GetAllUsersRequest as _user_GetAllUsersRequest, GetAllUsersRequest__Output as _user_GetAllUsersRequest__Output } from '../user/GetAllUsersRequest';
import type { GetAllUsersResponse as _user_GetAllUsersResponse, GetAllUsersResponse__Output as _user_GetAllUsersResponse__Output } from '../user/GetAllUsersResponse';
import type { GetMultipleUserRequest as _user_GetMultipleUserRequest, GetMultipleUserRequest__Output as _user_GetMultipleUserRequest__Output } from '../user/GetMultipleUserRequest';
import type { GetMultipleUserResponse as _user_GetMultipleUserResponse, GetMultipleUserResponse__Output as _user_GetMultipleUserResponse__Output } from '../user/GetMultipleUserResponse';
import type { GetUserRequest as _user_GetUserRequest, GetUserRequest__Output as _user_GetUserRequest__Output } from '../user/GetUserRequest';
import type { GetUserResponse as _user_GetUserResponse, GetUserResponse__Output as _user_GetUserResponse__Output } from '../user/GetUserResponse';
import type { UnblockUserRequest as _user_UnblockUserRequest, UnblockUserRequest__Output as _user_UnblockUserRequest__Output } from '../user/UnblockUserRequest';
import type { UnblockUserResponse as _user_UnblockUserResponse, UnblockUserResponse__Output as _user_UnblockUserResponse__Output } from '../user/UnblockUserResponse';
import type { UpdateUserRequest as _user_UpdateUserRequest, UpdateUserRequest__Output as _user_UpdateUserRequest__Output } from '../user/UpdateUserRequest';
import type { UpdateUserResponse as _user_UpdateUserResponse, UpdateUserResponse__Output as _user_UpdateUserResponse__Output } from '../user/UpdateUserResponse';

export interface UserServiceClient extends grpc.Client {
  BlockUser(argument: _user_BlockUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_BlockUserResponse__Output>): grpc.ClientUnaryCall;
  BlockUser(argument: _user_BlockUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_BlockUserResponse__Output>): grpc.ClientUnaryCall;
  BlockUser(argument: _user_BlockUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_BlockUserResponse__Output>): grpc.ClientUnaryCall;
  BlockUser(argument: _user_BlockUserRequest, callback: grpc.requestCallback<_user_BlockUserResponse__Output>): grpc.ClientUnaryCall;
  blockUser(argument: _user_BlockUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_BlockUserResponse__Output>): grpc.ClientUnaryCall;
  blockUser(argument: _user_BlockUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_BlockUserResponse__Output>): grpc.ClientUnaryCall;
  blockUser(argument: _user_BlockUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_BlockUserResponse__Output>): grpc.ClientUnaryCall;
  blockUser(argument: _user_BlockUserRequest, callback: grpc.requestCallback<_user_BlockUserResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteUser(argument: _user_DeleteUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _user_DeleteUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _user_DeleteUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  DeleteUser(argument: _user_DeleteUserRequest, callback: grpc.requestCallback<_user_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _user_DeleteUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _user_DeleteUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _user_DeleteUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  deleteUser(argument: _user_DeleteUserRequest, callback: grpc.requestCallback<_user_DeleteUserResponse__Output>): grpc.ClientUnaryCall;
  
  GetAllUsers(argument: _user_GetAllUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetAllUsersResponse__Output>): grpc.ClientUnaryCall;
  GetAllUsers(argument: _user_GetAllUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetAllUsersResponse__Output>): grpc.ClientUnaryCall;
  GetAllUsers(argument: _user_GetAllUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetAllUsersResponse__Output>): grpc.ClientUnaryCall;
  GetAllUsers(argument: _user_GetAllUsersRequest, callback: grpc.requestCallback<_user_GetAllUsersResponse__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _user_GetAllUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetAllUsersResponse__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _user_GetAllUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetAllUsersResponse__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _user_GetAllUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetAllUsersResponse__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _user_GetAllUsersRequest, callback: grpc.requestCallback<_user_GetAllUsersResponse__Output>): grpc.ClientUnaryCall;
  
  GetMultipleUser(argument: _user_GetMultipleUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetMultipleUserResponse__Output>): grpc.ClientUnaryCall;
  GetMultipleUser(argument: _user_GetMultipleUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetMultipleUserResponse__Output>): grpc.ClientUnaryCall;
  GetMultipleUser(argument: _user_GetMultipleUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetMultipleUserResponse__Output>): grpc.ClientUnaryCall;
  GetMultipleUser(argument: _user_GetMultipleUserRequest, callback: grpc.requestCallback<_user_GetMultipleUserResponse__Output>): grpc.ClientUnaryCall;
  getMultipleUser(argument: _user_GetMultipleUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetMultipleUserResponse__Output>): grpc.ClientUnaryCall;
  getMultipleUser(argument: _user_GetMultipleUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetMultipleUserResponse__Output>): grpc.ClientUnaryCall;
  getMultipleUser(argument: _user_GetMultipleUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetMultipleUserResponse__Output>): grpc.ClientUnaryCall;
  getMultipleUser(argument: _user_GetMultipleUserRequest, callback: grpc.requestCallback<_user_GetMultipleUserResponse__Output>): grpc.ClientUnaryCall;
  
  GetUser(argument: _user_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _user_GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _user_GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _user_GetUserRequest, callback: grpc.requestCallback<_user_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _user_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _user_GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _user_GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _user_GetUserRequest, callback: grpc.requestCallback<_user_GetUserResponse__Output>): grpc.ClientUnaryCall;
  
  UnblockUser(argument: _user_UnblockUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UnblockUserResponse__Output>): grpc.ClientUnaryCall;
  UnblockUser(argument: _user_UnblockUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UnblockUserResponse__Output>): grpc.ClientUnaryCall;
  UnblockUser(argument: _user_UnblockUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UnblockUserResponse__Output>): grpc.ClientUnaryCall;
  UnblockUser(argument: _user_UnblockUserRequest, callback: grpc.requestCallback<_user_UnblockUserResponse__Output>): grpc.ClientUnaryCall;
  unblockUser(argument: _user_UnblockUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UnblockUserResponse__Output>): grpc.ClientUnaryCall;
  unblockUser(argument: _user_UnblockUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UnblockUserResponse__Output>): grpc.ClientUnaryCall;
  unblockUser(argument: _user_UnblockUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UnblockUserResponse__Output>): grpc.ClientUnaryCall;
  unblockUser(argument: _user_UnblockUserRequest, callback: grpc.requestCallback<_user_UnblockUserResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateUser(argument: _user_UpdateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UpdateUserResponse__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _user_UpdateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UpdateUserResponse__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _user_UpdateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UpdateUserResponse__Output>): grpc.ClientUnaryCall;
  UpdateUser(argument: _user_UpdateUserRequest, callback: grpc.requestCallback<_user_UpdateUserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _user_UpdateUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UpdateUserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _user_UpdateUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UpdateUserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _user_UpdateUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UpdateUserResponse__Output>): grpc.ClientUnaryCall;
  updateUser(argument: _user_UpdateUserRequest, callback: grpc.requestCallback<_user_UpdateUserResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  BlockUser: grpc.handleUnaryCall<_user_BlockUserRequest__Output, _user_BlockUserResponse>;
  
  DeleteUser: grpc.handleUnaryCall<_user_DeleteUserRequest__Output, _user_DeleteUserResponse>;
  
  GetAllUsers: grpc.handleUnaryCall<_user_GetAllUsersRequest__Output, _user_GetAllUsersResponse>;
  
  GetMultipleUser: grpc.handleUnaryCall<_user_GetMultipleUserRequest__Output, _user_GetMultipleUserResponse>;
  
  GetUser: grpc.handleUnaryCall<_user_GetUserRequest__Output, _user_GetUserResponse>;
  
  UnblockUser: grpc.handleUnaryCall<_user_UnblockUserRequest__Output, _user_UnblockUserResponse>;
  
  UpdateUser: grpc.handleUnaryCall<_user_UpdateUserRequest__Output, _user_UpdateUserResponse>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  BlockUser: MethodDefinition<_user_BlockUserRequest, _user_BlockUserResponse, _user_BlockUserRequest__Output, _user_BlockUserResponse__Output>
  DeleteUser: MethodDefinition<_user_DeleteUserRequest, _user_DeleteUserResponse, _user_DeleteUserRequest__Output, _user_DeleteUserResponse__Output>
  GetAllUsers: MethodDefinition<_user_GetAllUsersRequest, _user_GetAllUsersResponse, _user_GetAllUsersRequest__Output, _user_GetAllUsersResponse__Output>
  GetMultipleUser: MethodDefinition<_user_GetMultipleUserRequest, _user_GetMultipleUserResponse, _user_GetMultipleUserRequest__Output, _user_GetMultipleUserResponse__Output>
  GetUser: MethodDefinition<_user_GetUserRequest, _user_GetUserResponse, _user_GetUserRequest__Output, _user_GetUserResponse__Output>
  UnblockUser: MethodDefinition<_user_UnblockUserRequest, _user_UnblockUserResponse, _user_UnblockUserRequest__Output, _user_UnblockUserResponse__Output>
  UpdateUser: MethodDefinition<_user_UpdateUserRequest, _user_UpdateUserResponse, _user_UpdateUserRequest__Output, _user_UpdateUserResponse__Output>
}
