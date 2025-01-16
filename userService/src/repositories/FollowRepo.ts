import IFollowRepo from "../interfaces/IFollowRepo";
import { IUser, User } from "../model/UserModel";
import { Follow } from '../model/followModel'
import IUserRepo from '../interfaces/IUserRepo'
import IFollow from "../interfaces/IFollow";



class FollowRepo implements IFollowRepo {

  constructor(
    private userRepo: IUserRepo
  ) { }

  async isFollowing(userId: string, targetId: string, relationType: IFollow["relationType"]): Promise<boolean> {
    const data = await Follow.exists({ userId, targetUserId: targetId, relationType })
    return data ? true : false
  }

  async followUser(userId: string, targetId: string): Promise<IUser | null> {
    try {
      await Follow.create([
        {
          userId: userId,
          targetUserId: targetId,
          relationType: "follower",
        },
        {
          userId: targetId,
          targetUserId: userId,
          relationType: "followee",
        }
      ])
      await this.userRepo.updateFollowCount(userId, true, 'followerCount')
      const user = await this.userRepo.updateFollowCount(targetId, true, 'followeeCount')
      return user
    } catch (error) {
      throw new Error(`Failed to follow user`)
    }
  }

  async unFollowUser(userId: string, targetId: string): Promise<IUser | null> {
    try {
      await Follow.deleteMany({
        $or: [
          { userId, targetUserId: targetId, relationType: "follower" },
          { userId: targetId, targetUserId: userId, relationType: "followee" },
        ]
      })
      await this.userRepo.updateFollowCount(userId, false, 'followerCount')
      const user = await this.userRepo.updateFollowCount(targetId, false, 'followeeCount')
      return user
    } catch (error) {
      throw new Error(`Failed to unfollow user`)
    }
  }

  async getFollowers(userId: string, limit: number, startIndex: number): Promise<IUser[]> {
    const followers = await Follow.find({ userId })
    if (!followers) return []
    const userIds = followers.map(user => user.targetUserId)
    const users = await this.userRepo.getMultipleUsers(userIds)
    return users ? users : []
  }

  async GetSuggestedPeople(userId: string, limit: number, startIndex: number): Promise<IUser[]> {
    const users = await this.userRepo.findAll(limit, startIndex)
    return users
  }

  async getFollowersCount(userId: string): Promise<number> {
    const userCount = await Follow.countDocuments({ userId })
    return userCount
  }
  async GetSuggestedPeopleCount(userId: string): Promise<number> {
    const userCount = await Follow.countDocuments()
    return userCount
  }

}

export default FollowRepo