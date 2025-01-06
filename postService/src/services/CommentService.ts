import SvcFuncReturnType from "../constants/SvcReturnType";
import IComment from "../interfaces/IComment";
import ICommentRepo from "../interfaces/ICommentRepo";
import ICommentService from "../interfaces/ICommentService";
import handleError from '../util/handleError'
import httpStatus from '../constants/httpStatus'

class CommentService implements ICommentService {

  constructor(
    private commentRepo: ICommentRepo
  ) { }


  async createComment(contentType: IComment["contentType"], contentId: string, comment: Partial<IComment>): SvcFuncReturnType<IComment> {
    try {
      const commentDetails = {
        ...comment,
        contentId,
        contentType
      }
      const newComment = await this.commentRepo.create(commentDetails)
      return { err: null, data: newComment }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async updateComment(commentId: string, comment: Partial<IComment>): SvcFuncReturnType<IComment | null> {
    try {
      const updatedComment = await this.commentRepo.update(commentId, comment)
      if (!updatedComment) return { err: httpStatus.BAD_REQUEST, errMsg: 'comment not found', data: null }
      return { err: null, data: updatedComment }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }

  async deleteComment(commentId: string): SvcFuncReturnType<{ commentId: string; } | null> {
    try {
      const deletedId = await this.commentRepo.delete(commentId)
      if (!deletedId) return { err: httpStatus.NOT_FOUND, errMsg: 'comment not found', data: null }
      return { err: null, data: deletedId }
    } catch (error) {
      const { code, message } = handleError(error)
      return { err: code as number, errMsg: message, data: null }
    }
  }


}

export default CommentService