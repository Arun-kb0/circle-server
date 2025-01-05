import PostRepo from './repositories/PostRepo'
import PostService from './services/PostService'
import PostController from './controllers/PostController'

const postRepo = new PostRepo()
export const postService = new PostService(postRepo)
export const postController = new PostController(postService)


