import IFollowRepo from "../interfaces/IFollowRepo";
import IUser from "../interfaces/IUser";
import IUserRepo from '../interfaces/IUserRepo'
import IFollow from "../interfaces/IFollow";
import IFollowBaseRepo from '../interfaces/IFollowBaseRepo'
import handleError from "../util/handeError";


class FollowRepo implements IFollowRepo {

  constructor(
    private followBaseRepo: IFollowBaseRepo,
    private userRepo: IUserRepo
  ) { }

  async isFollowing(userId: string, targetId: string, relationType: IFollow["relationType"]): Promise<boolean> {
    try {
      const data = await this.followBaseRepo.isFollowing(userId, targetId, relationType)
      return data ? true : false
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async followUser(userId: string, targetId: string): Promise<IUser | null> {
    try {
      await this.followBaseRepo.followUser(userId, targetId)
      await this.userRepo.updateFollowCount(userId, true, 'followerCount')
      const user = await this.userRepo.updateFollowCount(targetId, true, 'followeeCount')
      return user
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async unFollowUser(userId: string, targetId: string): Promise<IUser | null> {
    try {
      // await Follow.deleteMany({
      //   $or: [
      //     { userId, targetUserId: targetId, relationType: "follower" },
      //     { userId: targetId, targetUserId: userId, relationType: "followee" },
      //   ]
      // })
      await this.followBaseRepo.unFollowUser(userId, targetId)
      await this.userRepo.updateFollowCount(userId, false, 'followerCount')
      const user = await this.userRepo.updateFollowCount(targetId, false, 'followeeCount')
      return user
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async getFollowers(userId: string, limit: number, startIndex: number): Promise<IUser[]> {
    try {
      const followers = await this.followBaseRepo.getFollowers(userId, limit, startIndex)
      console.log(followers)
      if (!followers) return []
      const userIds = followers.map(user => user.targetUserId)
      console.log(userIds)
      const users = await this.userRepo.getMultipleUsers(userIds)
      return users ? users : []
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async GetSuggestedPeopleCount(userId: string): Promise<number> {
    try {
      const userCount = await this.userRepo.countDocs()
      return userCount
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async GetSuggestedPeople(userId: string, limit: number, startIndex: number): Promise<IUser[]> {
    try {
      const users = await this.userRepo.findAll(limit, startIndex)
      return users
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async getFollowersCount(userId: string): Promise<number> {
    try {
      const userCount = await this.followBaseRepo.getFollowersCount(userId)
      return userCount
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

}

export default FollowRepo