import IPostController, {
  CommentPostHandler, CreatePostHandler, DeletePostHandler,
  LikePostHandler, UpdatePostHandler
} from '../interfaces/IPostController'
import IPostService from '../interfaces/IPostService';


class PostController implements IPostController {

  constructor(
    private postController: IPostService
  ){}

  createPost!: CreatePostHandler;
  updatePost!: UpdatePostHandler;
  deletePost!: DeletePostHandler;
  commentPost!: CommentPostHandler;
  likePost!: LikePostHandler;
}

export default PostController