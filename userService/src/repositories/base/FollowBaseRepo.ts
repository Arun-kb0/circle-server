import IFollow from "../../interfaces/IFollow";
import IFollowBaseRepo from "../../interfaces/IFollowBaseRepo";
import { Follow, } from '../../model/followModel'
import { convertIFollowDbToIFollow, convertToObjectId } from '../../util/converter'
import handleError from "../../util/handeError";

class FollowBaseRepo implements IFollowBaseRepo {

  async isFollowing(userId: string, targetId: string): Promise<boolean> {
    const data = await Follow.exists({ userId, targetUserId: targetId })
    return data ? true : false
  }

  async followUser(userId: string, targetId: string): Promise<boolean> {
    try {
      const userObjId = convertToObjectId(userId)
      const targetObjId = convertToObjectId(targetId)
      const res = await Follow.create({
        userId: userObjId,
        targetUserId: targetObjId,
      })
      return res ? true : false
    } catch (error) {
      throw new Error(`Failed to follow user`)
    }
  }

  async unFollowUser(userId: string, targetId: string): Promise<boolean> {
    try {
      const userObjId = convertToObjectId(userId)
      const targetObjId = convertToObjectId(targetId)
      const res = await Follow.deleteOne({
        userId: userObjId,
        targetUserId: targetObjId,
      })
      return res ? true : false
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async getFollowers(userId: string, limit: number, startIndex: number): Promise<IFollow[]> {
    try {
      const userObjId = convertToObjectId(userId)
      const followers = await Follow.find({ targetUserId: userObjId }).sort({ createdAt: -1 }).limit(limit).skip(startIndex)
      if (!followers) return []
      const convertedFollowers = followers.map(follow => convertIFollowDbToIFollow(follow))
      return convertedFollowers
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async getFollowersCount(userId: string): Promise<number> {
    try {
      const userCount = await Follow.countDocuments({ targetUserId: userId })
      return userCount
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async getFollowing(userId: string, limit: number, startIndex: number): Promise<IFollow[]> {
    try {
      const userObjId = convertToObjectId(userId)
      const following = await Follow.find({ userId: userObjId }).sort({ createdAt: -1 }).limit(limit).skip(startIndex)
      if (!following) return []
      const convertedFollowing = following.map(follow => convertIFollowDbToIFollow(follow))
      return convertedFollowing
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async getFollowingCount(userId: string): Promise<number> {
    try {
      const userCount = await Follow.countDocuments({ userId: userId })
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