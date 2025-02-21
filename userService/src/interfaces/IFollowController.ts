import * as grpc from '@grpc/grpc-js'
import { GetFollowersRequest__Output } from "../proto/user/GetFollowersRequest";
import { GetFollowersResponse } from "../proto/user/GetFollowersResponse";
import { GetSuggestedPeopleRequest__Output } from "../proto/user/GetSuggestedPeopleRequest";
import { GetSuggestedPeopleResponse } from "../proto/user/GetSuggestedPeopleResponse";
import { FollowUserRequest__Output } from "../proto/user/FollowUserRequest";
import { FollowUserResponse } from "../proto/user/FollowUserResponse";
import { UnFollowUserRequest__Output } from "../proto/user/UnFollowUserRequest";
import { UnFollowUserResponse } from "../proto/user/UnFollowUserResponse";
import { GetFollowingRequest__Output } from "../proto/user/GetFollowingRequest";
import { GetFollowingResponse } from "../proto/user/GetFollowingResponse";

export type GetFollowersHandler = grpc.handleUnaryCall<GetFollowersRequest__Output, GetFollowersResponse>
export type GetSuggestedPeopleHandler = grpc.handleUnaryCall<GetSuggestedPeopleRequest__Output, GetSuggestedPeopleResponse>
export type FollowUserHandler = grpc.handleUnaryCall<FollowUserRequest__Output, FollowUserResponse>
export type UnFollowUserHandler = grpc.handleUnaryCall<UnFollowUserRequest__Output, UnFollowUserResponse>
export type GetFollowingHandler = grpc.handleUnaryCall<GetFollowingRequest__Output, GetFollowingResponse>

interface IFollowController {
  getFollowers: GetFollowersHandler
  getSuggestedPeople: GetSuggestedPeopleHandler
  getFollowing: GetFollowersHandler

  followUser: FollowUserHandler
  unFollowUser: UnFollowUserHandler
}

export default IFollowController