import IFollow from "../../interfaces/IFollow";
import IFollowBaseRepo from "../../interfaces/IFollowBaseRepo";
import IUser from "../../interfaces/IUser";
import { Follow, } from '../../model/followModel'
import { convertIFollowDbToIFollow, convertIUserDbToIUser, convertToObjectId } from '../../util/converter'
import handleError from "../../util/handeError";

class FollowBaseRepo implements IFollowBaseRepo {

  async findMutualConnectionCount(userId: string): Promise<number> {
    try {
      const userObjId = convertToObjectId(userId)
      const result = await Follow.aggregate([
        {
          $match: {
            userId: userObjId,
          }
        },
        {
          $lookup: {
            from: "follows",
            localField: "targetUserId",
            foreignField: "userId",
            as: "theirFriends"
          }
        },
        {
          $unwind: "$theirFriends"
        },
        {
          $project: {
            friendId: "$theirFriends.targetUserId"
          }
        },
        {
          $group: {
            _id: "$friendId"
          }
        },
        {
          $lookup: {
            from: "follows",
            let: {
              mutualId: "$_id"
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$userId", userObjId] },
                      { $eq: ["$targetUserId", "$$mutualId"] }
                    ]
                  }
                }
              }
            ],
            as: "alreadyFollowing"
          }
        },
        {
          $match: {
            "alreadyFollowing.0": {
              $exists: false
            }
          }
        },
        {
          $count: "totalMutualFollowers"
        }
      ])

      return result && result.length > 0 ? result[0].totalMutualFollowers : 0
    } catch (error) {
      throw new Error(`Failed to follow user`)
    }
  }

  async findMutualConnectionUsersByUserId(userId: string, limit: number, startIndex: number): Promise<IUser[]> {
    try {
      const userObjId = convertToObjectId(userId)
      const users = await Follow.aggregate([
        {
          $match: {
            userId: userObjId,
          }
        },
        {
          $lookup: {
            from: "follows",
            localField: "targetUserId",
            foreignField: "userId",
            as: "theirFriends"
          }
        },
        {
          $unwind: "$theirFriends"
        },
        {
          $project: {
            friendId: "$theirFriends.targetUserId"
          }
        },
        {
          $group: {
            _id: "$friendId"
          }
        },
        {
          $lookup: {
            from: "follows",
            let: {
              mutualId: "$_id"
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$userId", userObjId] },
                      { $eq: ["$targetUserId", "$$mutualId"] }
                    ]
                  }
                }
              }
            ],
            as: "alreadyFollowing"
          }
        },
        {
          $match: {
            "alreadyFollowing.0": {
              $exists: false
            }
          }
        },
        {
          $lookup: {
            from: "users",
            localField: "_id",
            foreignField: "_id",
            as: "user"
          }
        },
        {
          $unwind: "$user"
        },
        {
          $replaceRoot: {
            newRoot: "$user"
          }
        },
        {
          $project: {
            password: 0,
            refreshToken: 0
          }
        },
        {
          $skip: startIndex
        },
        {
          $limit: limit
        }
      ])
      return users ? users.map(item => convertIUserDbToIUser(item)) : []
    } catch (error) {
      throw new Error(`Failed to get mutual connections`)
    }
  }

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