import ILike from '../interfaces/ILike';
import ILikeRepo from '../interfaces/ILikeRepo'
import { Comment } from '../model/commentModel';
import { Like } from '../model/likeModel'
import { Post } from '../model/postModel';
import { convertIPostDbToIPost } from '../util/converter';
import { updatePostInCache } from '../util/redisCache';
import ILikeBaseRepo from '../interfaces/ILIkeBaseRepo'

class LikeRepo implements ILikeRepo {

  constructor(
    private likeBaseRepo: ILikeBaseRepo
  ) { }

  async checkIsLiked(authorId: string, contentId: string): Promise<boolean> {
    const isLiked = await this.likeBaseRepo.checkIsLiked(authorId, contentId)
    return isLiked ? true : false
  }

  async like(like: Partial<ILike>): Promise<ILike> {
    const newLike = await this.likeBaseRepo.like(like)
    await this.handleCount(newLike?.contentType, newLike?.contentId, true)
    return newLike
  }

  async unlike(authorId: string, contentId: string): Promise<ILike | null> {
    const deletedLike = await this.likeBaseRepo.unlike(authorId, contentId)
    await this.handleCount(deletedLike?.contentType, deletedLike?.contentId, false)
    return deletedLike
  }

  async handleCount(contentType: ILike['contentType'] | undefined, contentId: string | undefined, isInc: boolean): Promise<boolean> {
    try {
      if (!contentId) return false
      const count = isInc ? 1 : -1
      console.log("count = ", count)

      switch (contentType) {
        case 'post': {
          const updatedPost = await Post.findOneAndUpdate(
            { _id: contentId },
            { $inc: { likesCount: count } }
          )
          if (!updatedPost) throw new Error('update post comment count failed')
          const convertedPost = convertIPostDbToIPost(updatedPost)
          await updatePostInCache(convertedPost)
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