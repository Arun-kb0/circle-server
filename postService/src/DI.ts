import PostRepo from './repositories/PostRepo'
import PostService from './services/PostService'
import PostController from './controllers/PostController'
import CommentRepo from './repositories/CommentRepo'
import CommentService from './services/CommentService'
import CommentController from './controllers/CommentController'
import LikeRepo from './repositories/LikeRepo'
import LikeService from './services/LikeService'
import LikeController from './controllers/LikeController'


const postRepo = new PostRepo()
export const postService = new PostService(postRepo)
export const postController = new PostController(postService)

const commentRepo = new CommentRepo
export const commentService = new CommentService(commentRepo)
export const commentController = new CommentController(commentService)

const likeRepo = new LikeRepo
export const likeService = new LikeService(likeRepo)
export const likeController = new LikeController(likeService)
