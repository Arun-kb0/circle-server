// Original file: src/proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { BlockUserRequest as _user_BlockUserRequest, BlockUserRequest__Output as _user_BlockUserRequest__Output } from '../user/BlockUserRequest';
import type { BlockUserResponse as _user_BlockUserResponse, BlockUserResponse__Output as _user_BlockUserResponse__Output } from '../user/BlockUserResponse';
import type { DeleteUserRequest as _user_DeleteUserRequest, DeleteUserRequest__Output as _user_DeleteUserRequest__Output } from '../user/DeleteUserRequest';
import type { DeleteUserResponse as _user_DeleteUserResponse, DeleteUserResponse__Output as _user_DeleteUserResponse__Output } from '../user/DeleteUserResponse';
import type { FollowUserRequest as _user_FollowUserRequest, FollowUserRequest__Output as _user_FollowUserRequest__Output } from '../user/FollowUserRequest';
import type { FollowUserResponse as _user_FollowUserResponse, FollowUserResponse__Output as _user_FollowUserResponse__Output } from '../user/FollowUserResponse';
import type { GetAllUsersRequest as _user_GetAllUsersRequest, GetAllUsersRequest__Output as _user_GetAllUsersRequest__Output } from '../user/GetAllUsersRequest';
import type { GetAllUsersResponse as _user_GetAllUsersResponse, GetAllUsersResponse__Output as _user_GetAllUsersResponse__Output } from '../user/GetAllUsersResponse';
import type { GetFollowersRequest as _user_GetFollowersRequest, GetFollowersRequest__Output as _user_GetFollowersRequest__Output } from '../user/GetFollowersRequest';
import type { GetFollowersResponse as _user_GetFollowersResponse, GetFollowersResponse__Output as _user_GetFollowersResponse__Output } from '../user/GetFollowersResponse';
import type { GetFollowingRequest as _user_GetFollowingRequest, GetFollowingRequest__Output as _user_GetFollowingRequest__Output } from '../user/GetFollowingRequest';
import type { GetFollowingResponse as _user_GetFollowingResponse, GetFollowingResponse__Output as _user_GetFollowingResponse__Output } from '../user/GetFollowingResponse';
import type { GetMultipleUserRequest as _user_GetMultipleUserRequest, GetMultipleUserRequest__Output as _user_GetMultipleUserRequest__Output } from '../user/GetMultipleUserRequest';
import type { GetMultipleUserResponse as _user_GetMultipleUserResponse, GetMultipleUserResponse__Output as _user_GetMultipleUserResponse__Output } from '../user/GetMultipleUserResponse';
import type { GetSuggestedPeopleRequest as _user_GetSuggestedPeopleRequest, GetSuggestedPeopleRequest__Output as _user_GetSuggestedPeopleRequest__Output } from '../user/GetSuggestedPeopleRequest';
import type { GetSuggestedPeopleResponse as _user_GetSuggestedPeopleResponse, GetSuggestedPeopleResponse__Output as _user_GetSuggestedPeopleResponse__Output } from '../user/GetSuggestedPeopleResponse';
import type { GetUserRequest as _user_GetUserRequest, GetUserRequest__Output as _user_GetUserRequest__Output } from '../user/GetUserRequest';
import type { GetUserResponse as _user_GetUserResponse, GetUserResponse__Output as _user_GetUserResponse__Output } from '../user/GetUserResponse';
import type { UnFollowUserRequest as _user_UnFollowUserRequest, UnFollowUserRequest__Output as _user_UnFollowUserRequest__Output } from '../user/UnFollowUserRequest';
import type { UnFollowUserResponse as _user_UnFollowUserResponse, UnFollowUserResponse__Output as _user_UnFollowUserResponse__Output } from '../user/UnFollowUserResponse';
import type { UnblockUserRequest as _user_UnblockUserRequest, UnblockUserRequest__Output as _user_UnblockUserRequest__Output } from '../user/UnblockUserRequest';
import type { UnblockUserResponse as _user_UnblockUserResponse, UnblockUserResponse__Output as _user_UnblockUserResponse__Output } from '../user/UnblockUserResponse';
import type { UpdateUserRequest as _user_UpdateUserRequest, UpdateUserRequest__Output as _user_UpdateUserRequest__Output } from '../user/UpdateUserRequest';
import type { UpdateUserResponse as _user_UpdateUserResponse, UpdateUserResponse__Output as _user_UpdateUserResponse__Output } from '../user/UpdateUserResponse';
import type { UsersCountRequest as _user_UsersCountRequest, UsersCountRequest__Output as _user_UsersCountRequest__Output } from '../user/UsersCountRequest';
import type { UsersCountResponse as _user_UsersCountResponse, UsersCountResponse__Output as _user_UsersCountResponse__Output } from '../user/UsersCountResponse';

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
  
  FollowUser(argument: _user_FollowUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_FollowUserResponse__Output>): grpc.ClientUnaryCall;
  FollowUser(argument: _user_FollowUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_FollowUserResponse__Output>): grpc.ClientUnaryCall;
  FollowUser(argument: _user_FollowUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_FollowUserResponse__Output>): grpc.ClientUnaryCall;
  FollowUser(argument: _user_FollowUserRequest, callback: grpc.requestCallback<_user_FollowUserResponse__Output>): grpc.ClientUnaryCall;
  followUser(argument: _user_FollowUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_FollowUserResponse__Output>): grpc.ClientUnaryCall;
  followUser(argument: _user_FollowUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_FollowUserResponse__Output>): grpc.ClientUnaryCall;
  followUser(argument: _user_FollowUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_FollowUserResponse__Output>): grpc.ClientUnaryCall;
  followUser(argument: _user_FollowUserRequest, callback: grpc.requestCallback<_user_FollowUserResponse__Output>): grpc.ClientUnaryCall;
  
  GetAllUsers(argument: _user_GetAllUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetAllUsersResponse__Output>): grpc.ClientUnaryCall;
  GetAllUsers(argument: _user_GetAllUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetAllUsersResponse__Output>): grpc.ClientUnaryCall;
  GetAllUsers(argument: _user_GetAllUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetAllUsersResponse__Output>): grpc.ClientUnaryCall;
  GetAllUsers(argument: _user_GetAllUsersRequest, callback: grpc.requestCallback<_user_GetAllUsersResponse__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _user_GetAllUsersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetAllUsersResponse__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _user_GetAllUsersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetAllUsersResponse__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _user_GetAllUsersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetAllUsersResponse__Output>): grpc.ClientUnaryCall;
  getAllUsers(argument: _user_GetAllUsersRequest, callback: grpc.requestCallback<_user_GetAllUsersResponse__Output>): grpc.ClientUnaryCall;
  
  GetFollowers(argument: _user_GetFollowersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetFollowersResponse__Output>): grpc.ClientUnaryCall;
  GetFollowers(argument: _user_GetFollowersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetFollowersResponse__Output>): grpc.ClientUnaryCall;
  GetFollowers(argument: _user_GetFollowersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetFollowersResponse__Output>): grpc.ClientUnaryCall;
  GetFollowers(argument: _user_GetFollowersRequest, callback: grpc.requestCallback<_user_GetFollowersResponse__Output>): grpc.ClientUnaryCall;
  getFollowers(argument: _user_GetFollowersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetFollowersResponse__Output>): grpc.ClientUnaryCall;
  getFollowers(argument: _user_GetFollowersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetFollowersResponse__Output>): grpc.ClientUnaryCall;
  getFollowers(argument: _user_GetFollowersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetFollowersResponse__Output>): grpc.ClientUnaryCall;
  getFollowers(argument: _user_GetFollowersRequest, callback: grpc.requestCallback<_user_GetFollowersResponse__Output>): grpc.ClientUnaryCall;
  
  GetFollowing(argument: _user_GetFollowingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetFollowingResponse__Output>): grpc.ClientUnaryCall;
  GetFollowing(argument: _user_GetFollowingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetFollowingResponse__Output>): grpc.ClientUnaryCall;
  GetFollowing(argument: _user_GetFollowingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetFollowingResponse__Output>): grpc.ClientUnaryCall;
  GetFollowing(argument: _user_GetFollowingRequest, callback: grpc.requestCallback<_user_GetFollowingResponse__Output>): grpc.ClientUnaryCall;
  getFollowing(argument: _user_GetFollowingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetFollowingResponse__Output>): grpc.ClientUnaryCall;
  getFollowing(argument: _user_GetFollowingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetFollowingResponse__Output>): grpc.ClientUnaryCall;
  getFollowing(argument: _user_GetFollowingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetFollowingResponse__Output>): grpc.ClientUnaryCall;
  getFollowing(argument: _user_GetFollowingRequest, callback: grpc.requestCallback<_user_GetFollowingResponse__Output>): grpc.ClientUnaryCall;
  
  GetMultipleUser(argument: _user_GetMultipleUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetMultipleUserResponse__Output>): grpc.ClientUnaryCall;
  GetMultipleUser(argument: _user_GetMultipleUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetMultipleUserResponse__Output>): grpc.ClientUnaryCall;
  GetMultipleUser(argument: _user_GetMultipleUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetMultipleUserResponse__Output>): grpc.ClientUnaryCall;
  GetMultipleUser(argument: _user_GetMultipleUserRequest, callback: grpc.requestCallback<_user_GetMultipleUserResponse__Output>): grpc.ClientUnaryCall;
  getMultipleUser(argument: _user_GetMultipleUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetMultipleUserResponse__Output>): grpc.ClientUnaryCall;
  getMultipleUser(argument: _user_GetMultipleUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetMultipleUserResponse__Output>): grpc.ClientUnaryCall;
  getMultipleUser(argument: _user_GetMultipleUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetMultipleUserResponse__Output>): grpc.ClientUnaryCall;
  getMultipleUser(argument: _user_GetMultipleUserRequest, callback: grpc.requestCallback<_user_GetMultipleUserResponse__Output>): grpc.ClientUnaryCall;
  
  GetSuggestedPeople(argument: _user_GetSuggestedPeopleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetSuggestedPeopleResponse__Output>): grpc.ClientUnaryCall;
  GetSuggestedPeople(argument: _user_GetSuggestedPeopleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetSuggestedPeopleResponse__Output>): grpc.ClientUnaryCall;
  GetSuggestedPeople(argument: _user_GetSuggestedPeopleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetSuggestedPeopleResponse__Output>): grpc.ClientUnaryCall;
  GetSuggestedPeople(argument: _user_GetSuggestedPeopleRequest, callback: grpc.requestCallback<_user_GetSuggestedPeopleResponse__Output>): grpc.ClientUnaryCall;
  getSuggestedPeople(argument: _user_GetSuggestedPeopleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetSuggestedPeopleResponse__Output>): grpc.ClientUnaryCall;
  getSuggestedPeople(argument: _user_GetSuggestedPeopleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetSuggestedPeopleResponse__Output>): grpc.ClientUnaryCall;
  getSuggestedPeople(argument: _user_GetSuggestedPeopleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetSuggestedPeopleResponse__Output>): grpc.ClientUnaryCall;
  getSuggestedPeople(argument: _user_GetSuggestedPeopleRequest, callback: grpc.requestCallback<_user_GetSuggestedPeopleResponse__Output>): grpc.ClientUnaryCall;
  
  GetUser(argument: _user_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _user_GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _user_GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _user_GetUserRequest, callback: grpc.requestCallback<_user_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _user_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _user_GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _user_GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _user_GetUserRequest, callback: grpc.requestCallback<_user_GetUserResponse__Output>): grpc.ClientUnaryCall;
  
  UnFollowUser(argument: _user_UnFollowUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UnFollowUserResponse__Output>): grpc.ClientUnaryCall;
  UnFollowUser(argument: _user_UnFollowUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UnFollowUserResponse__Output>): grpc.ClientUnaryCall;
  UnFollowUser(argument: _user_UnFollowUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UnFollowUserResponse__Output>): grpc.ClientUnaryCall;
  UnFollowUser(argument: _user_UnFollowUserRequest, callback: grpc.requestCallback<_user_UnFollowUserResponse__Output>): grpc.ClientUnaryCall;
  unFollowUser(argument: _user_UnFollowUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UnFollowUserResponse__Output>): grpc.ClientUnaryCall;
  unFollowUser(argument: _user_UnFollowUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UnFollowUserResponse__Output>): grpc.ClientUnaryCall;
  unFollowUser(argument: _user_UnFollowUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UnFollowUserResponse__Output>): grpc.ClientUnaryCall;
  unFollowUser(argument: _user_UnFollowUserRequest, callback: grpc.requestCallback<_user_UnFollowUserResponse__Output>): grpc.ClientUnaryCall;
  
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
  
  UsersCount(argument: _user_UsersCountRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UsersCountResponse__Output>): grpc.ClientUnaryCall;
  UsersCount(argument: _user_UsersCountRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UsersCountResponse__Output>): grpc.ClientUnaryCall;
  UsersCount(argument: _user_UsersCountRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UsersCountResponse__Output>): grpc.ClientUnaryCall;
  UsersCount(argument: _user_UsersCountRequest, callback: grpc.requestCallback<_user_UsersCountResponse__Output>): grpc.ClientUnaryCall;
  usersCount(argument: _user_UsersCountRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UsersCountResponse__Output>): grpc.ClientUnaryCall;
  usersCount(argument: _user_UsersCountRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UsersCountResponse__Output>): grpc.ClientUnaryCall;
  usersCount(argument: _user_UsersCountRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UsersCountResponse__Output>): grpc.ClientUnaryCall;
  usersCount(argument: _user_UsersCountRequest, callback: grpc.requestCallback<_user_UsersCountResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  BlockUser: grpc.handleUnaryCall<_user_BlockUserRequest__Output, _user_BlockUserResponse>;
  
  DeleteUser: grpc.handleUnaryCall<_user_DeleteUserRequest__Output, _user_DeleteUserResponse>;
  
  FollowUser: grpc.handleUnaryCall<_user_FollowUserRequest__Output, _user_FollowUserResponse>;
  
  GetAllUsers: grpc.handleUnaryCall<_user_GetAllUsersRequest__Output, _user_GetAllUsersResponse>;
  
  GetFollowers: grpc.handleUnaryCall<_user_GetFollowersRequest__Output, _user_GetFollowersResponse>;
  
  GetFollowing: grpc.handleUnaryCall<_user_GetFollowingRequest__Output, _user_GetFollowingResponse>;
  
  GetMultipleUser: grpc.handleUnaryCall<_user_GetMultipleUserRequest__Output, _user_GetMultipleUserResponse>;
  
  GetSuggestedPeople: grpc.handleUnaryCall<_user_GetSuggestedPeopleRequest__Output, _user_GetSuggestedPeopleResponse>;
  
  GetUser: grpc.handleUnaryCall<_user_GetUserRequest__Output, _user_GetUserResponse>;
  
  UnFollowUser: grpc.handleUnaryCall<_user_UnFollowUserRequest__Output, _user_UnFollowUserResponse>;
  
  UnblockUser: grpc.handleUnaryCall<_user_UnblockUserRequest__Output, _user_UnblockUserResponse>;
  
  UpdateUser: grpc.handleUnaryCall<_user_UpdateUserRequest__Output, _user_UpdateUserResponse>;
  
  UsersCount: grpc.handleUnaryCall<_user_UsersCountRequest__Output, _user_UsersCountResponse>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  BlockUser: MethodDefinition<_user_BlockUserRequest, _user_BlockUserResponse, _user_BlockUserRequest__Output, _user_BlockUserResponse__Output>
  DeleteUser: MethodDefinition<_user_DeleteUserRequest, _user_DeleteUserResponse, _user_DeleteUserRequest__Output, _user_DeleteUserResponse__Output>
  FollowUser: MethodDefinition<_user_FollowUserRequest, _user_FollowUserResponse, _user_FollowUserRequest__Output, _user_FollowUserResponse__Output>
  GetAllUsers: MethodDefinition<_user_GetAllUsersRequest, _user_GetAllUsersResponse, _user_GetAllUsersRequest__Output, _user_GetAllUsersResponse__Output>
  GetFollowers: MethodDefinition<_user_GetFollowersRequest, _user_GetFollowersResponse, _user_GetFollowersRequest__Output, _user_GetFollowersResponse__Output>
  GetFollowing: MethodDefinition<_user_GetFollowingRequest, _user_GetFollowingResponse, _user_GetFollowingRequest__Output, _user_GetFollowingResponse__Output>
  GetMultipleUser: MethodDefinition<_user_GetMultipleUserRequest, _user_GetMultipleUserResponse, _user_GetMultipleUserRequest__Output, _user_GetMultipleUserResponse__Output>
  GetSuggestedPeople: MethodDefinition<_user_GetSuggestedPeopleRequest, _user_GetSuggestedPeopleResponse, _user_GetSuggestedPeopleRequest__Output, _user_GetSuggestedPeopleResponse__Output>
  GetUser: MethodDefinition<_user_GetUserRequest, _user_GetUserResponse, _user_GetUserRequest__Output, _user_GetUserResponse__Output>
  UnFollowUser: MethodDefinition<_user_UnFollowUserRequest, _user_UnFollowUserResponse, _user_UnFollowUserRequest__Output, _user_UnFollowUserResponse__Output>
  UnblockUser: MethodDefinition<_user_UnblockUserRequest, _user_UnblockUserResponse, _user_UnblockUserRequest__Output, _user_UnblockUserResponse__Output>
  UpdateUser: MethodDefinition<_user_UpdateUserRequest, _user_UpdateUserResponse, _user_UpdateUserRequest__Output, _user_UpdateUserResponse__Output>
  UsersCount: MethodDefinition<_user_UsersCountRequest, _user_UsersCountResponse, _user_UsersCountRequest__Output, _user_UsersCountResponse__Output>
}
