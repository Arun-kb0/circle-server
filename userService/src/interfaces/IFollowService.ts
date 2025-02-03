import { FuncReturnType, PaginationUsers } from '../constants/svcTypes'
import IUser  from '../interfaces/IUser'

interface IFollowService {
  getFollowing(userId: string, page: number): FuncReturnType<PaginationUsers>
  getFollowers(userId: string, page: number): FuncReturnType<PaginationUsers>
  getSuggestedPeople(userId: string, page: number): FuncReturnType<PaginationUsers>
  followUser(userId: string, targetId: string): FuncReturnType<IUser>
  unFollowUser(userId: string, targetId: string): FuncReturnType<IUser>
}

export default IFollowService