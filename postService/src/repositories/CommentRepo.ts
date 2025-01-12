import IComment, { ICommentExt } from "../interfaces/IComment";
import ICommentRepo from "../interfaces/ICommentRepo";
import { Comment } from '../model/commentModel'
import { addUserToComment } from "../util/userClientFunctions";

class CommentRepo implements ICommentRepo {

  async create(comment: Partial<IComment>): Promise<ICommentExt | null> {
    const newComment = await Comment.create(comment)
    const updatedComment = await addUserToComment(newComment.toObject() as IComment)
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
    return deletedComment ? { commentId: deletedComment._id } : null
  }

}

export default CommentRepo