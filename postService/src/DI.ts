import PostRepo from './repositories/PostRepo'
import PostService from './services/PostService'
import PostController from './controllers/PostController'
import CommentRepo from './repositories/CommentRepo'
import CommentService from './services/CommentService'
import CommentController from './controllers/CommentController'
import LikeRepo from './repositories/LikeRepo'
import LikeService from './services/LikeService'
import LikeController from './controllers/LikeController'
import PostBaseRepo from './repositories/base/PostBaseRepo'
import CommentBaseRepo from './repositories/base/CommentBaseRepo'
import LikeBaseRepo from './repositories/base/LikeBaseRepo'


const postBaseRepo = new PostBaseRepo()
const postRepo = new PostRepo(postBaseRepo)
export const postService = new PostService(postRepo)
export const postController = new PostController(postService)

const commentBaseRepo = new CommentBaseRepo()
const commentRepo = new CommentRepo(commentBaseRepo)
export const commentService = new CommentService(commentRepo)
export const commentController = new CommentController(commentService)

const likeBaseRepo = new LikeBaseRepo()
const likeRepo = new LikeRepo(likeBaseRepo)
export const likeService = new LikeService(likeRepo)
export const likeController = new LikeController(likeService)
