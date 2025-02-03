import IUser from '../interfaces/IUser'
import IFollow from './IFollow'

interface IFollowRepo {
  isFollowing(userId: string, targetId: string, relationType: IFollow['relationType']): Promise<boolean>
  followUser(userId: string, targetId: string): Promise<IUser | null>
  unFollowUser(userId: string, targetId: string): Promise<IUser | null>

  GetSuggestedPeopleCount(userId: string): Promise<number>
  GetSuggestedPeople(userId: string, limit: number, startIndex: number): Promise<IUser[]>
  getFollowersCount(userId: string): Promise<number>
  getFollowers(userId: string, limit: number, startIndex: number): Promise<IUser[]>
  
  getFollowingCount(userId: string): Promise<number>
  getFollowing(userId: string, limit: number, startIndex: number): Promise<IUser[]>
}

export default IFollowRepo