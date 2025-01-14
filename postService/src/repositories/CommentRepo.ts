import IComment, { ICommentExt } from "../interfaces/IComment";
import ICommentRepo from "../interfaces/ICommentRepo";
import ILike from "../interfaces/ILike";
import { Comment } from '../model/commentModel'
import { Post } from "../model/postModel";
import { updatePostInCache } from "../util/redisCache";
import { addUserToComment } from "../util/userClientFunctions";

class CommentRepo implements ICommentRepo {

  async create(comment: Partial<IComment>): Promise<ICommentExt | null> {
    const newComment = await Comment.create(comment)
    const commentObj = newComment.toObject()
    const updatedComment = await addUserToComment(commentObj)
    this.handleCount(commentObj.contentType, commentObj.contentId, true)
    return updatedComment
  }

  async update(commentId: string, comment: Partial<IComment>): Promise<ICommentExt | null> {
    const updatedComment = await Comment.findOneAndUpdate(
      { _id: commentId },
      { $set: comment },
      { new: true }
    )
    if (!updatedComment) return null
    const mergedComment = await addUserToComment(updatedComment.toObject() as IComment)
    return mergedComment
  }

  async delete(commentId: string): Promise<{ commentId: string; } | null> {
    const deletedComment = await Comment.findOneAndDelete({ _id: commentId })
    const deletedObj = deletedComment?.toObject()
    if (!deletedObj) return null
    this.handleCount(deletedObj.contentType, deletedObj.contentId, false)
    return { commentId: deletedObj._id }
  }


  async handleCount(contentType: IComment['contentType'] | undefined, contentId: string | undefined, isInc: boolean): Promise<boolean> {
    try {
      if (!contentId) return false

      const count = isInc ? 1 : -1
      switch (contentType) {
        case 'post': {
          const updatedPost = await Post.findOneAndUpdate(
            { _id: contentId },
            { $inc: { commentCount: count } }
          )
          if (!updatedPost) throw new Error('update post comment count failed')
          await updatePostInCache(updatedPost?.toObject())
          return true
        }
        case 'comment': {
          await Comment.findOneAndUpdate(
            { _id: contentId },
            { $inc: { commentCount: count } }
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

export default CommentRepo