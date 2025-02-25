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
import { GetUserCountByDateDetailsResponse} from '../proto/user/GetUserCountByDateDetailsResponse';


export type GetAllUserHandler = grpc.handleUnaryCall<GetAllUsersRequest__Output, GetAllUsersResponse>;
export type GetUserHandler = grpc.handleUnaryCall<GetUserRequest__Output, GetUserResponse>;
export type BlockUserHandler = grpc.handleUnaryCall<BlockUserRequest__Output, BlockUserResponse>;
export type UnblockUserHandler = grpc.handleUnaryCall<UnblockUserRequest__Output, UnblockUserResponse>;
export type UpdateUserHandler = grpc.handleUnaryCall<UpdateUserRequest__Output, UpdateUserResponse>;
export type GetMultipleUsersHandler = grpc.handleUnaryCall<GetMultipleUserRequest__Output, GetMultipleUserResponse>;
export type CountUsersHandler = grpc.handleUnaryCall<UsersCountRequest__Output, UsersCountResponse>;
export type GetUserCountDetailsHandler = grpc.handleUnaryCall<GetUserCountByDateDetailsRequest__Output, GetUserCountByDateDetailsResponse>;


interface IUserController {
  getAllUsers: GetAllUserHandler
  getUser: GetUserHandler
  blockUser: BlockUserHandler
  unblockUser: UnblockUserHandler
  updateUser: UpdateUserHandler

  getMultipleUsers: GetMultipleUsersHandler
  usersCount: CountUsersHandler
  getUserCountByDateDetails: GetUserCountDetailsHandler
}

export default IUserController