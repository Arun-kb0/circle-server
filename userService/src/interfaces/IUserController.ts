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


interface IUserController {
  getAllUsers: grpc.handleUnaryCall<GetAllUsersRequest__Output,GetAllUsersResponse>
  getUser: grpc.handleUnaryCall<GetUserRequest__Output, GetUserResponse>;
  blockUser: grpc.handleUnaryCall<BlockUserRequest__Output, BlockUserResponse>;
  unblockUser: grpc.handleUnaryCall<UnblockUserRequest__Output, UnblockUserResponse>;
  updateUser: grpc.handleUnaryCall<UpdateUserRequest__Output, UpdateUserResponse>;

  getMultipleUsers: grpc.handleUnaryCall<GetMultipleUserRequest__Output, GetMultipleUserResponse>;
}

export default IUserController