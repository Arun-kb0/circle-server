import IComment from "../interfaces/IComment";
import ICommentRepo from "../interfaces/ICommentRepo";
import ICommentService from "../interfaces/ICommentService";



class CommentService implements ICommentService {

  constructor(
    private commentRepo: ICommentRepo
  ) { }

  

}