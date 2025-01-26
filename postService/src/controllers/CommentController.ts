import IComment, { ICommentExt } from "../interfaces/IComment";
import ICommentController, {
  CreateCommentHandler, DeleteCommentHandler, UpdateCommentHandler
} from "../interfaces/ICommentController";
import ICommentService from "../interfaces/ICommentService";
import { validateRequest, validateResponse } from '../util/validations'
import handleError from '../util/handleError'


class CommentController implements ICommentController {

  constructor(
    private commentService: ICommentService
  ) { }

  createComment: CreateCommentHandler = async (call, cb) => {
    try {
      const { comment, contentId, contentType } = call.request
      validateRequest('comment , contentType, contentId are required', comment, contentType, contentId)
      const res = await this.commentService.createComment(contentType as IComment["contentType"], contentId as string, comment as Partial<IComment>)
      validateResponse(res)
      cb(null, { comment: res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  updateComment: UpdateCommentHandler = async (call, cb) => {
    try {
      const { comment, commentId } = call.request
      validateRequest('comment , commentId are required', comment, commentId)
      const res = await this.commentService.updateComment(commentId as string, comment as Partial<IComment>)
      validateResponse(res)
      cb(null, { comment: res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  deleteComment: DeleteCommentHandler = async (call, cb) => {
    try {
      const { commentId } = call.request
      validateRequest('commentId is required', commentId)
      const res = await this.commentService.deleteComment(commentId as string)
      validateResponse(res)
      cb(null, res.data)
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

}

export default CommentController