import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { UserServiceClient as _user_UserServiceClient, UserServiceDefinition as _user_UserServiceDefinition } from './user/UserService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  user: {
    BlockUserRequest: MessageTypeDefinition
    BlockUserResponse: MessageTypeDefinition
    DeleteUserRequest: MessageTypeDefinition
    DeleteUserResponse: MessageTypeDefinition
    FollowUserRequest: MessageTypeDefinition
    FollowUserResponse: MessageTypeDefinition
    GetAllUsersRequest: MessageTypeDefinition
    GetAllUsersResponse: MessageTypeDefinition
    GetFollowersRequest: MessageTypeDefinition
    GetFollowersResponse: MessageTypeDefinition
    GetFollowingRequest: MessageTypeDefinition
    GetFollowingResponse: MessageTypeDefinition
    GetMultipleUserRequest: MessageTypeDefinition
    GetMultipleUserResponse: MessageTypeDefinition
    GetSuggestedPeopleRequest: MessageTypeDefinition
    GetSuggestedPeopleResponse: MessageTypeDefinition
    GetUserRequest: MessageTypeDefinition
    GetUserResponse: MessageTypeDefinition
    Image: MessageTypeDefinition
    Role: EnumTypeDefinition
    Status: EnumTypeDefinition
    UnFollowUserRequest: MessageTypeDefinition
    UnFollowUserResponse: MessageTypeDefinition
    UnblockUserRequest: MessageTypeDefinition
    UnblockUserResponse: MessageTypeDefinition
    UpdateUserRequest: MessageTypeDefinition
    UpdateUserResponse: MessageTypeDefinition
    User: MessageTypeDefinition
    UserService: SubtypeConstructor<typeof grpc.Client, _user_UserServiceClient> & { service: _user_UserServiceDefinition }
  }
}

