import mongoose, { Schema, Document, Model, Date } from 'mongoose'


export interface IUser extends Document {
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
  createdAt: Date
  updatedAt: Date
}

const UserSchema: Schema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number },
    location: { type: String },
    state: { type: String },
    gender: { type: String },
    role: { type: String ,default:'user'},
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