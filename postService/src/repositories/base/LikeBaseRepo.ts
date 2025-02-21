import ILike from "../../interfaces/ILike";
import ILikeBaseRepo from "../../interfaces/ILIkeBaseRepo";
import handleError from '../../util/handleError'
import { Like } from '../../model/likeModel'
import { convertILIkeDbToILIke, convertILikeToILikeDb,  convertToObjectId } from '../../util/converter'

class LikeBaseRepo implements ILikeBaseRepo {

  async checkIsLiked(authorId: string, contentId: string): Promise<boolean> {
    try {
      const authorObjId = convertToObjectId(authorId)
      const contentObjId = convertToObjectId(contentId)
      const isLiked = await Like.exists({
        contentId: contentObjId,
        authorId: authorObjId
      })
      return isLiked ? true : false
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async like(like: Partial<ILike>): Promise<ILike> {
    try {
      const convertedLike= convertILikeToILikeDb(like)
      const newLike = await Like.create(convertedLike)
      return convertILIkeDbToILIke(newLike)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async unlike(authorId: string, contentId: string): Promise<ILike | null> {
    try {
      const authorObjId = convertToObjectId(authorId)
      const contentObjId = convertToObjectId(contentId)
      const deletedLike = await Like.findOneAndDelete({
        contentId: contentObjId,
        authorId: authorObjId
      })
      return deletedLike ? convertILIkeDbToILIke(deletedLike) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

}

export default LikeBaseRepo