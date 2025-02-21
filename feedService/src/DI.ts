import LikeBaseRepo from './repositories/base/LikeBaseRepo'
import CommentBaseRepo from './repositories/base/CommentBaseRepo'
import PostBaseRepo from './repositories/base/PostBaseRepo'
import FeedRepo from './repositories/FeedRepo'
import FeedService from './services/FeedService'
import FeedController from './controllers/FeedController'

const likeBaseRepo = new LikeBaseRepo()
const commentBaseRepo = new CommentBaseRepo()
const postBaseRepo = new PostBaseRepo()

export const feedRepo = new FeedRepo(
  postBaseRepo,
  commentBaseRepo,
  likeBaseRepo,
)
export const feedService = new FeedService(feedRepo)
export const feedController = new FeedController(feedService)