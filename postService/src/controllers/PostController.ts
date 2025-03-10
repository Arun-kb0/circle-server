import IPostController, {
CreatePostHandler, DeletePostHandler,UpdatePostHandler
} from '../interfaces/IPostController'
import IPostService from '../interfaces/IPostService';
import handleError from '../util/handleError';
import { validateRequest, validateResponse } from '../util/validations'
import { convertPostForDb } from '../util/converter'
import { Post__Output } from '../proto/post/Post';

class PostController implements IPostController {

  constructor(
    private postService: IPostService
  ) { }

  createPost: CreatePostHandler = async (call, cb) => {
    try {
      const { post } = call.request
      validateRequest('post is required.', post)
      const convertedPost = convertPostForDb(post as Post__Output)
      const res = await this.postService.createPost(convertedPost)
      validateResponse(res)
      cb(null, { post: res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  updatePost: UpdatePostHandler = async (call, cb) => {
    try {
      const { post, postId } = call.request
      validateRequest('post is required.', post)
      const convertedPost = convertPostForDb(post as Post__Output)
      const res = await this.postService.updatePost(postId as string, convertedPost)
      validateResponse(res)
      cb(null, { post: res.data })
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
}

export default PostController