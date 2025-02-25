import ILike from "../../interfaces/ILike";
import ILikeBaseRepo from "../../interfaces/ILikeBaseRepo";
import { Like } from "../../model/likeModel";
import { convertILIkeDbToILIke, convertLikeForDb } from "../../util/converter";
import handleError from "../../util/handleError";


class LikeBaseRepo implements ILikeBaseRepo {

  async totalLikesCount(): Promise<number> {
    try {
      const count = await Like.countDocuments()
      return count
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findLIkesByContentIdsAndType(contentIds: string[], contentType: ILike["contentType"]): Promise<ILike[]> {
    try {
      const likes = await Like.find({ contentType, contentId: { $in: contentIds } })
      const convertedLikes = likes.map(like => convertILIkeDbToILIke(like))
      return convertedLikes
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findLIkeByContentIdAndType(contentId: string, contentType: ILike["contentType"]): Promise<ILike | null> {
    try {
      const like = await Like.findOne({ contentType, contentId })
      return like ? convertILIkeDbToILIke(like) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

}

export default LikeBaseRepo