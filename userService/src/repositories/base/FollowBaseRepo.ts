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
      const userObjId = convertToObjectId(userId)
      const targetObjId = convertToObjectId(targetId)
      const res = await Follow.create([
        {
          userId: userObjId,
          targetUserId: targetObjId,
          relationType: "followee",
        },
        {
          userId: userObjId,
          targetUserId: targetObjId,
          relationType: "follower",
        }
      ])
      return res ? true : false
    } catch (error) {
      throw new Error(`Failed to follow user`)
    }
  }

  async unFollowUser(userId: string, targetId: string): Promise<boolean> {
    try {
      const userObjId = convertToObjectId(userId)
      const targetObjId = convertToObjectId(targetId)
      const res = await Follow.deleteMany({
        $or: [
          {
            userId: userObjId,
            targetUserId: targetObjId,
            relationType: "followee",
          },
          {
            userId: userObjId,
            targetUserId: targetObjId,
            relationType: "follower",
          }
        ]
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
      const followers = await Follow.find({ userId: userObjId, relationType: 'follower' }).limit(limit).skip(startIndex)
      console.log(followers)
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
      const userCount = await Follow.countDocuments({ userId, relationType: 'follower' })
      return userCount
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async getFollowing(userId: string, limit: number, startIndex: number): Promise<IFollow[]> {
    try {
      const userObjId = convertToObjectId(userId)
      const followers = await Follow.find({ userId: userObjId, relationType: 'followee' }).limit(limit).skip(startIndex)
      console.log(followers)
      if (!followers) return []
      const convertedFollowers = followers.map(follow => convertIFollowDbToIFollow(follow))
      return convertedFollowers
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async getFollowingCount(userId: string): Promise<number> {
    try {
      const userCount = await Follow.countDocuments({ userId, relationType: 'followee' })
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