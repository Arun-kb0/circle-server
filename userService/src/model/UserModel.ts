import mongoose, { Schema, Document, Model, Date } from 'mongoose'


export interface IUser extends Document {
  _id: string
  name: string
  email: string
  password: string
  age?: number
  location?: number
  state?: number
  gender?: number
  role: 'admin' | 'user'
  followeeCount: number
  followerCount: number
  refreshToken: string
  status: 'blocked' | 'deleted' | 'active'
  isOnline: boolean
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
    password: { type: String, required: true },
    age: { type: Number },
    location: { type: Number },
    state: { type: Number },
    gender: { type: Number },
    role: { type: String },
    followeeCount: { type: Number, default: 0 },
    followerCount: { type: Number, default: 0 },
    refreshToken: { type: String },
    status: { type: String, default: 'active' },
    isOnline: { type: Boolean, default: false },
    image: {
      url: { type: String, default: null },
      name: { type: String, default: null },
    }
  },
  { timestamps: true }
)

export const User: Model<IUser> = mongoose.model<IUser>('users', UserSchema)