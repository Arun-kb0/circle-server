import * as grpc from '@grpc/grpc-js'
import { BlockUserRequest__Output } from "../proto/user/BlockUserRequest";
import { BlockUserResponse } from "../proto/user/BlockUserResponse";
import { GetAllUsersRequest__Output } from "../proto/user/GetAllUsersRequest";
import { GetAllUsersResponse } from "../proto/user/GetAllUsersResponse";
import { GetUserResponse } from "../proto/user/GetUserResponse";
import { GetUserRequest__Output } from "../proto/user/GetUserRequest";
import { UnblockUserRequest__Output } from "../proto/user/UnblockUserRequest";
import { UnblockUserResponse } from "../proto/user/UnblockUserResponse";
import { UpdateUserRequest__Output } from "../proto/user/UpdateUserRequest";
import { UpdateUserResponse } from "../proto/user/UpdateUserResponse";
import { GetMultipleUserRequest__Output } from '../proto/user/GetMultipleUserRequest';
import { GetMultipleUserResponse } from '../proto/user/GetMultipleUserResponse';
import { UsersCountRequest__Output } from '../proto/user/UsersCountRequest';
import { UsersCountResponse } from '../proto/user/UsersCountResponse';
import { GetUserCountByDateDetailsRequest__Output } from '../proto/user/GetUserCountByDateDetailsRequest';
import { GetUserCountByDateDetailsResponse } from '../proto/user/GetUserCountByDateDetailsResponse';

import { GetBlockedUsersByBlockerIdRequest__Output } from '../proto/user/GetBlockedUsersByBlockerIdRequest';
import { GetBlockedUsersByBlockerIdResponse } from '../proto/user/GetBlockedUsersByBlockerIdResponse';
import { GetBlockedUserByBlockerAndBlockedIdRequest__Output } from '../proto/user/GetBlockedUserByBlockerAndBlockedIdRequest';
import { GetBlockedUserByBlockerAndBlockedIdResponse } from '../proto/user/GetBlockedUserByBlockerAndBlockedIdResponse';
import { CreateBlockedUserRequest__Output } from '../proto/user/CreateBlockedUserRequest';
import { CreateBlockedUserResponse } from '../proto/user/CreateBlockedUserResponse';
import { DeleteBlockedUserRequest__Output } from '../proto/user/DeleteBlockedUserRequest';
import { DeleteBlockedUserResponse } from '../proto/user/DeleteBlockedUserResponse';



export type GetAllUserHandler = grpc.handleUnaryCall<GetAllUsersRequest__Output, GetAllUsersResponse>;
export type GetUserHandler = grpc.handleUnaryCall<GetUserRequest__Output, GetUserResponse>;
export type BlockUserHandler = grpc.handleUnaryCall<BlockUserRequest__Output, BlockUserResponse>;
export type UnblockUserHandler = grpc.handleUnaryCall<UnblockUserRequest__Output, UnblockUserResponse>;
export type UpdateUserHandler = grpc.handleUnaryCall<UpdateUserRequest__Output, UpdateUserResponse>;
export type GetMultipleUsersHandler = grpc.handleUnaryCall<GetMultipleUserRequest__Output, GetMultipleUserResponse>;
export type CountUsersHandler = grpc.handleUnaryCall<UsersCountRequest__Output, UsersCountResponse>;
export type GetUserCountDetailsHandler = grpc.handleUnaryCall<GetUserCountByDateDetailsRequest__Output, GetUserCountByDateDetailsResponse>;

export type GetBlockedUsersByBlockerIdHandler = grpc.handleUnaryCall<GetBlockedUsersByBlockerIdRequest__Output, GetBlockedUsersByBlockerIdResponse>;
export type GetBlockedUserByBlockerAndBlockedIdHandler = grpc.handleUnaryCall<GetBlockedUserByBlockerAndBlockedIdRequest__Output, GetBlockedUserByBlockerAndBlockedIdResponse>;
export type CreateBlockedUserHandler = grpc.handleUnaryCall<CreateBlockedUserRequest__Output, CreateBlockedUserResponse>;
export type DeleteBlockedUserHandler = grpc.handleUnaryCall<DeleteBlockedUserRequest__Output, DeleteBlockedUserResponse>; 
  
interface IUserController {
  getAllUsers: GetAllUserHandler
  getUser: GetUserHandler
  blockUser: BlockUserHandler
  unblockUser: UnblockUserHandler
  updateUser: UpdateUserHandler

  getMultipleUsers: GetMultipleUsersHandler
  usersCount: CountUsersHandler
  getUserCountByDateDetails: GetUserCountDetailsHandler

  getBlockedUsersByBlockerId: GetBlockedUsersByBlockerIdHandler
  getBlockedUserByBlockerAndBlockedId: GetBlockedUserByBlockerAndBlockedIdHandler
  createBlockedUser: CreateBlockedUserHandler
  deleteBlockedUser: DeleteBlockedUserHandler
  
}

export default IUserController