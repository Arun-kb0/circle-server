
interface IBlockUser {
  _id: string
  blockedUserId: string
  blockerUserId: string
  createdAt: string
  updatedAt: string
}
export interface IBlockUserExt {
  _id: string
  blockedUserId: string
  blockerUserId: string
  createdAt: string
  updatedAt: string
  blockedUserName: string
  blockedUserImage?: string
}

export default IBlockUser