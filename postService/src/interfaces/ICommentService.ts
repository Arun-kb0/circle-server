import SvcFuncReturnType from "../constants/SvcReturnType";
import IComment from "./IComment";



interface ICommentService {
  createComment(contentType: Pick<IComment, 'contentType'>, contentId: string, comment: Partial<IComment>): SvcFuncReturnType<IComment>
  updateComment(contentType: Pick<IComment, 'contentType'>, contentId: string, comment: Partial<IComment>): SvcFuncReturnType<IComment>
  deleteComment(contentType: Pick<IComment, 'contentType'>, contentId: string, comment: Partial<IComment>): SvcFuncReturnType<{ commentId: string }>
}

export default ICommentService