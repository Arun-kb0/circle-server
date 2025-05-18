import IBlockUser from "./IBlockUser"

interface IBlockUserBaseRepo {
  getBlockedUsersByBlockerId(blockerUserId: string, limit: number, startIndex: number): Promise<IBlockUser[]> 
  getBlockedUsersByBlockerIdCount(blockerUserId: string): Promise<number> 
  isBlockedUserExists(blockedUserId: string, blockerUserId: string): Promise<boolean>
  getBlockedUserByBlockerAndBlockedId(blockerUserId: string, blockedUserId: string): Promise<IBlockUser | null>
  createBlockedUser(blockedUserId: string, blockerUserId: string): Promise<IBlockUser>
  deleteBlockedUser(blockedUserId: string, blockerUserId: string): Promise<IBlockUser | null>
}

export default IBlockUserBaseRepo