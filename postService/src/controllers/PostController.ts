import IPostController, {
  CommentPostHandler, CreatePostHandler, DeletePostHandler,
  LikePostHandler, UpdatePostHandler
} from '../interfaces/IPostController'
import IPostService from '../interfaces/IPostService';
import handleError from '../util/handleError';
import { validateRequest, validateResponse } from '../util/validations'
import { convertPostForGrpc } from '../util/converter'
import IPost from '../interfaces/IPost';

class PostController implements IPostController {

  constructor(
    private postService: IPostService
  ) { }

  createPost: CreatePostHandler = async (call, cb) => {
    try {
      const { post } = call.request
      validateRequest('post is required.', post)
      const res = await this.postService.createPost(post as Partial<IPost>)
      validateResponse(res)
      const newPost = convertPostForGrpc(res.data as IPost)
      cb(null, { post: newPost })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  updatePost: UpdatePostHandler = async (call, cb) => {
    try {
      const { post, postId } = call.request
      validateRequest('post is required.', post)
      const res = await this.postService.updatePost(postId as string, post as Partial<IPost>)
      validateResponse(res)
      const updatedPost = convertPostForGrpc(res.data as IPost)
      cb(null, { post: updatedPost })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  deletePost: DeletePostHandler = async (call, cb) => {
    try {
      const { postId } = call.request
      validateRequest('postAuthorId and postId required', postId)
      const res = await this.postService.deletePost(postId as string)
      validateResponse(res)
      cb(null, res.data)
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  commentPost!: CommentPostHandler;
  likePost!: LikePostHandler;
}

export default PostController