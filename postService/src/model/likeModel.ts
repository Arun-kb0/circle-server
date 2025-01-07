import mongoose, { Schema } from "mongoose";
import ILike from "../interfaces/ILike";


const LikeSchema = new Schema<ILike>(
  {
    authorId: { type: String, required: true },
    contentId: { type: String, required: true },
    contentType: { type: String, required: true },
  },
  { timestamps: true }
)

export const Like = mongoose.model<ILike>('likes', LikeSchema)