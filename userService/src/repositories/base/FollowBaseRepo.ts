import IFollow from "../../interfaces/IFollow";
import IFollowBaseRepo from "../../interfaces/IFollowBaseRepo";
import { Follow, } from '../../model/followModel'
import { convertIFollowDbToIFollow, convertToObjectId } from '../../util/converter'
import handleError from "../../util/handeError";

class FollowBaseRepo implements IFollowBaseRepo {


  async isFollowing(userId: string, targetId: string, relationType: IFollow["relationType"]): Promise<boolean> {
    const data = await Follow.exists({ userId, targetUserId: targetId, relationType })
    return data ? true : false
  }

  async followUser(userId: string, targetId: string): Promise<boolean> {
    try {
      const res = await Follow.create([
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
      // await this.userRepo.updateFollowCount(userId, true, 'followerCount')
      // const user = await this.userRepo.updateFollowCount(targetId, true, 'followeeCount')
      return res ? true : false
    } catch (error) {
      throw new Error(`Failed to follow user`)
    }
  }

  async unFollowUser(userId: string, targetId: string): Promise<boolean> {
    try {
      const res = await Follow.deleteMany({
        $or: [
          { userId, targetUserId: targetId, relationType: "follower" },
          { userId: targetId, targetUserId: userId, relationType: "followee" },
        ]
      })
      // await this.userRepo.updateFollowCount(userId, false, 'followerCount')
      // const user = await this.userRepo.updateFollowCount(targetId, false, 'followeeCount')
      return res ? true : false
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async getFollowers(userId: string, limit: number, startIndex: number): Promise<IFollow[]> {
    try {
      const userObjId = convertToObjectId(userId)
      console.log(' user id', userId)
      console.log('converted user id', userObjId)
      const followers = await Follow.find({ userId: userObjId }).limit(limit).skip(startIndex)
      console.log(followers)
      if (!followers) return []
      const convertedFollowers = followers.map(follow => convertIFollowDbToIFollow(follow))
      return convertedFollowers
      // const userIds = followers.map(user => user.targetUserId)
      // const users = await this.userRepo.getMultipleUsers(userIds)
      // return users ? users : []
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async getFollowersCount(userId: string): Promise<number> {
    try {
      const userCount = await Follow.countDocuments({ userId })
      return userCount
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async GetSuggestedPeopleCount(userId: string): Promise<number> {
    try {
      const userCount = await Follow.countDocuments()
      return userCount
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

}

export default FollowBaseRepo