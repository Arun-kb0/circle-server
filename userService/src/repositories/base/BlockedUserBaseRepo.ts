import IBlockedUser from "../../interfaces/IBlockUser";
import IBlockUserBaseRepo from "../../interfaces/IBlockUserBaseRepo";
import handleError from '../../util/handeError';
import {
  convertIBlockUserDbToIBlockedUser, convertToObjectId,
  covertIBlockUserToIBlockUserDb
} from '../../util/converter'
import IBlockUser from "../../interfaces/IBlockUser";
import { BlockUser } from '../../model/blockUserModel'

class BlockedUserBaseRepo implements IBlockUserBaseRepo {

  async isBlockedUserExists(blockedUserId: string, blockerUserId: string): Promise<boolean> {
    try {
      const blockedUserIdObjId = convertToObjectId(blockedUserId)
      const blockerUserIdObjId = convertToObjectId(blockerUserId)
      const isExists = await BlockUser.exists({
        blockedUserId: blockedUserIdObjId,
        blockerUserId: blockerUserIdObjId
      })
      return !!isExists
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async getBlockedUsersByBlockerIdCount(blockerUserId: string): Promise<number> {
    try {
      const blockerUserIdObjId = convertToObjectId(blockerUserId)
      const count = await BlockUser.countDocuments({ blockerUserId: blockerUserIdObjId })
      return count
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async getBlockedUsersByBlockerId(blockerUserId: string, limit: number, startIndex: number): Promise<IBlockUser[]> {
    try {
      const blockerUserIdObjId = convertToObjectId(blockerUserId)
      const foundBlocked = await BlockUser.find({ blockerUserId: blockerUserIdObjId }).sort({ createdAt: -1 }).limit(limit).skip(startIndex)
      return foundBlocked.map((blockedUser) => convertIBlockUserDbToIBlockedUser(blockedUser))
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async getBlockedUserByBlockerAndBlockedId(blockerUserId: string, blockedUserId: string): Promise<IBlockUser | null> {
    try {
      const blockedUserIdObjId = convertToObjectId(blockedUserId)
      const blockerUserIdObjId = convertToObjectId(blockerUserId)
      const deletedBlocked = await BlockUser.findOne({
        blockedUserId: blockedUserIdObjId,
        blockerUserId: blockerUserIdObjId
      })
      return deletedBlocked ? convertIBlockUserDbToIBlockedUser(deletedBlocked) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async createBlockedUser(blockedUserId: string, blockerUserId: string): Promise<IBlockUser> {
    try {
      const convertedBlocked = covertIBlockUserToIBlockUserDb({ blockedUserId, blockerUserId })
      const newBlocked = await BlockUser.create(convertedBlocked)
      return convertIBlockUserDbToIBlockedUser(newBlocked)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async deleteBlockedUser(blockedUserId: string, blockerUserId: string): Promise<IBlockUser | null> {
    try {
      const blockedUserIdObjId = convertToObjectId(blockedUserId)
      const blockerUserIdObjId = convertToObjectId(blockerUserId)
      const deletedBlocked = await BlockUser.findOneAndDelete({
        blockedUserId: blockedUserIdObjId,
        blockerUserId: blockerUserIdObjId
      }, { new: true })
      return deletedBlocked ? convertIBlockUserDbToIBlockedUser(deletedBlocked) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

}

export default BlockedUserBaseRepo