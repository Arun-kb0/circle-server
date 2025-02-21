import SvcFuncReturnType from "../constants/SvcReturnType";
import IComment, { ICommentExt } from "./IComment";



interface ICommentService {
  createComment(contentType: IComment["contentType"], contentId: string, comment: Partial<IComment>): SvcFuncReturnType<ICommentExt>
  updateComment(commentId: string, comment: Partial<IComment>): SvcFuncReturnType<ICommentExt | null>
  deleteComment(commentId: string): SvcFuncReturnType<{ commentId: string } | null>
}

export default ICommentService