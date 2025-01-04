import mongoose, { Schema, Document, Model, Date } from 'mongoose'


export interface IUser extends Document {
  _id: string
  name: string
  email: string
  password?: string
  age?: number
  location?: string
  state?: string
  gender?: string
  role: 'admin' | 'user'
  followeeCount: number
  followerCount: number
  refreshToken: string
  status: 'blocked' | 'deleted' | 'active',
  isVerified: boolean
  isOnline: boolean
  provider: 'google' | 'facebook' | null
  image?: {
    url?: string
    name?: string
  }
  createdAt: Date
  updatedAt: Date
}

const UserSchema: Schema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    age: { type: Number },
    location: { type: String },
    state: { type: String },
    gender: { type: String },
    role: { type: String },
    followeeCount: { type: Number, default: 0 },
    followerCount: { type: Number, default: 0 },
    refreshToken: { type: String },
    status: { type: String, default: 'active' },
    isVerified: { type: Boolean, default: false },
    isOnline: { type: Boolean, default: false },
    provider: { type: String, default: null },
    image: {
      url: { type: String, default: null },
      name: { type: String, default: null },
    }
  },
  { timestamps: true }
)

export const User: Model<IUser> = mongoose.model<IUser>('users', UserSchema)