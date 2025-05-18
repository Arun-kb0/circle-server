import IUser from '../interfaces/IUser'

interface IFollowRepo {
  isFollowing(userId: string, targetId: string): Promise<boolean>
  followUser(userId: string, targetId: string): Promise<IUser | null>
  unFollowUser(userId: string, targetId: string): Promise<IUser | null>

  GetSuggestedPeopleCount(userId: string): Promise<number>
  GetSuggestedPeople(userId: string, limit: number, startIndex: number): Promise<IUser[]>
  getFollowersCount(userId: string): Promise<number>
  getFollowers(userId: string, limit: number, startIndex: number): Promise<IUser[]>

  getFollowingCount(userId: string): Promise<number>
  getFollowing(userId: string, limit: number, startIndex: number): Promise<IUser[]>

  findMutualConnectionCount(userId: string): Promise<number>
  findMutualConnectionUsersByUserId(userId: string, limit: number, startIndex: number): Promise<IUser[]>
}

export default IFollowRepo