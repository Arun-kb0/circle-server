import IComment from "../interfaces/IComment";
import ICommentRepo from "../interfaces/ICommentRepo";
import { Comment } from '../model/commentModel'

class CommentRepo implements ICommentRepo {

  async create(comment: Partial<IComment>): Promise<IComment> {
    const newComment = await Comment.create(comment)
    return newComment
  }

  async update(commentId: string, comment: Partial<IComment>): Promise<IComment | null> {
    const updatedComment = await Comment.findOneAndUpdate(
      { _id: commentId },
      { $set: comment },
      { new: true }
    )
    return updatedComment ? updatedComment.toObject() : null
  }

  async delete(commentId: string): Promise<{ commentId: string; } | null> {
    const deletedComment = await Comment.findOneAndDelete({ _id: commentId })
    return deletedComment ? { commentId: deletedComment._id } : null
  }

}

export default CommentRepo