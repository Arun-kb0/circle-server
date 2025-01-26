import IComment, { ICommentExt } from "../../interfaces/IComment";
import ICommentBaseRepo from "../../interfaces/ICommentBaseRepo";
import handleError from '../../util/handleError'
import { Comment } from '../../model/commentModel'
import { convertICommentDbToIComment, convertICommentToICommentDb } from '../../util/converter'

class CommentBaseRepo implements ICommentBaseRepo {

  async createComment(comment: Partial<IComment>): Promise<IComment | null> {
    try {
      const convertedComment = convertICommentToICommentDb(comment)
      const newComment = await Comment.create(convertedComment)
      return convertICommentDbToIComment(newComment)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async updateComment(commentId: string, comment: Partial<IComment>): Promise<IComment | null> {
    try {
      const convertedComment = convertICommentToICommentDb(comment)
      const updatedComment = await Comment.findOneAndUpdate(
        { _id: commentId },
        { $set: convertedComment },
        { new: true }
      )
      return updatedComment ? convertICommentDbToIComment(updatedComment) : null
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async deleteComment(commentId: string): Promise<IComment | null> {
    try {
      const deletedComment = await Comment.findOneAndDelete({ _id: commentId })
      if (!deletedComment) return null
      return convertICommentDbToIComment(deletedComment)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }


}

export default CommentBaseRepo