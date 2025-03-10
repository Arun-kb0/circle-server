import IPostController, {
  CreatePostHandler, DeletePostHandler, ReportPostHandler, SavePostHandler, UpdatePostHandler
} from '../interfaces/IPostController'
import IPostService from '../interfaces/IPostService';
import handleError from '../util/handleError';
import { validateRequest, validateResponse } from '../util/validations'
import { convertPostForDb } from '../util/converter'
import { Post__Output } from '../proto/post/Post';
import IReport from '../interfaces/IReport';

class PostController implements IPostController {

  constructor(
    private postService: IPostService
  ) { }

  savePost: SavePostHandler = async (call, cb) => {
    try {
      const { userId, postId } = call.request
      validateRequest('userId and postId are required.', userId, postId)
      const res = await this.postService.savePost(userId as string, postId as string)
      validateResponse(res)
      cb(null, res.data)
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

  reportPost: ReportPostHandler = async (call, cb) => {
    try {
      const { userId, contentId, contentType } = call.request
      validateRequest('userId , contentType and postId are required.', userId, contentId, contentType)
      const res = await this.postService.reportPost(
        userId as string,
        contentId as string,
        contentType as unknown as IReport['contentType']
      )
      validateResponse(res)
      cb(null, { reportData: res.data })
    } catch (error) {
      const err = handleError(error)
      cb(err, null)
    }
  }

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