import ILike from '../interfaces/ILike';
import ILikeRepo from '../interfaces/ILikeRepo'
import { Comment } from '../model/commentModel';
import { Like } from '../model/likeModel'
import { Post } from '../model/postModel';

class LikeRepo implements ILikeRepo {

  async checkIsLiked(authorId: string, contentId: string): Promise<boolean> {
    const isLiked = await Like.exists({ contentId, authorId })
    return isLiked ? true : false
  }


  async like(like: Partial<ILike>): Promise<ILike> {
    const newLike = await Like.create(like)
    const isSuccess = await this.handleCount(newLike.contentType, newLike.contentId, true)
    console.log('handle count success')
    return newLike
  }

  async unlike(authorId: string, contentId: string): Promise<ILike | null> {
    const deletedLike = await Like.findOneAndDelete({ contentId, authorId })
    const deletedLikeObj = deletedLike ? deletedLike.toObject() : null
    const isSuccess = await this.handleCount(deletedLikeObj?.contentType, deletedLikeObj?.contentId, false)
    return deletedLikeObj
  }

  async handleCount(contentType: ILike['contentType'] | undefined, contentId: string | undefined, isInc: boolean): Promise<boolean> {
    try {
      if (!contentId) return false

      const count = isInc ? 1 : -1
      switch (contentType) {
        case 'post': {
          await Post.findOneAndUpdate(
            { _id: contentId },
            { $inc: { likesCount: count } }
          )
          return true
        }
        case 'comment': {
          await Comment.findOneAndUpdate(
            { _id: contentId },
            { $inc: { likesCount: count } }
          )
          return true
        }
        case 'story': {
          // ! update story like count
        }
        default:
          console.log("content type doesn't match.")
          return false
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

}

export default LikeRepo