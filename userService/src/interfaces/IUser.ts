
export interface IUser {
  _id: string
  name: string
  email: string
  password: string
  age?: number
  location?: string
  state?: string
  gender?: string
  followeeCount: number
  followerCount: number
  refreshToken: string
  role: 'admin' | 'user'
  status: 'blocked' | 'deleted' | 'active'
  isOnline: boolean
  image?: {
    url?: string
    name?: string
  }
  createdAt: string
  updatedAt: string
}

export default IUser