import { IUser } from '../model/UserModel'
import IFollow from './IFollow'

interface IFollowRepo {
  isFollowing(userId: string, targetId: string, relationType: IFollow['relationType']): Promise<boolean>
  followUser(userId: string, targetId: string): Promise<IUser | null>
  unFollowUser(userId: string, targetId: string): Promise<IUser | null>

  getFollowersCount(userId: string): Promise<number>
  GetSuggestedPeopleCount(userId: string): Promise<number>
  getFollowers(userId: string, limit: number, startIndex: number): Promise<IUser[]>
  GetSuggestedPeople(userId: string, limit: number, startIndex: number): Promise<IUser[]>
}

export default IFollowRepo