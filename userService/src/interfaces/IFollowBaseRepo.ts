import IFollow from './IFollow'

interface IFollowBaseRepo {
  isFollowing(userId: string, targetId: string): Promise<boolean>
  followUser(userId: string, targetId: string): Promise<boolean>
  unFollowUser(userId: string, targetId: string): Promise<boolean>

  GetSuggestedPeopleCount(userId: string): Promise<number>
  getFollowersCount(userId: string): Promise<number>
  getFollowers(userId: string, limit: number, startIndex: number): Promise<IFollow[]>

  getFollowingCount(userId: string): Promise<number>
  getFollowing(userId: string, limit: number, startIndex: number): Promise<IFollow[]>
}

export default IFollowBaseRepo

