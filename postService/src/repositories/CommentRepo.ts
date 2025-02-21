import IComment, { ICommentExt } from "../interfaces/IComment";
import ICommentRepo from "../interfaces/ICommentRepo";
import ILike from "../interfaces/ILike";
import { Comment } from '../model/commentModel'
import { Post } from "../model/postModel";
import { convertIPostDbToIPost } from "../util/converter";
import { updatePostInCache } from "../util/redisCache";
import { addUserToComment } from "../util/userClientFunctions";
import ICommentBaseRepo from '../interfaces/ICommentBaseRepo'

class CommentRepo implements ICommentRepo {

  constructor(
    private commentBaseRepo: ICommentBaseRepo
  ) { }

  async create(comment: Partial<IComment>): Promise<ICommentExt | null> {
    const newComment = await this.commentBaseRepo.createComment(comment)
    if (!newComment) return null
    const updatedComment = await addUserToComment(newComment)
    if (comment.parentId) {
      this.commentBaseRepo.handleCommentReplayCount(comment.parentId, true)
    } else {
      this.handleCount(newComment.contentType, newComment.contentId, true)
    }
    return updatedComment
  }

  async update(commentId: string, comment: Partial<IComment>): Promise<ICommentExt | null> {
    const updatedComment = await this.commentBaseRepo.updateComment(commentId, comment)
    if (!updatedComment) return null
    const mergedComment = await addUserToComment(updatedComment)
    return mergedComment
  }

  async delete(commentId: string): Promise<{ commentId: string; } | null> {
    const deleteComment = await this.commentBaseRepo.deleteComment(commentId)
    if (!deleteComment) return null
    if (!deleteComment.parentId) {
      console.log('parent comment')
      this.handleCount(deleteComment.contentType, deleteComment.contentId, false)
    }
    return { commentId: deleteComment._id }
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
          const convertedPost = convertIPostDbToIPost(updatedPost)
          await updatePostInCache(convertedPost)
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