import LikeBaseRepo from './repositories/base/LikeBaseRepo'
import CommentBaseRepo from './repositories/base/CommentBaseRepo'
import PostBaseRepo from './repositories/base/PostBaseRepo'
import SavedBaseRepo from './repositories/base/SavedBaseRepo'
import ReportBaseRepo from './repositories/base/ReportBaseRepo'
import FeedRepo from './repositories/FeedRepo'
import FeedService from './services/FeedService'
import FeedController from './controllers/FeedController'

const likeBaseRepo = new LikeBaseRepo()
const commentBaseRepo = new CommentBaseRepo()
const postBaseRepo = new PostBaseRepo()
const savedBaseRepo = new SavedBaseRepo()
const reportBaseRepo = new ReportBaseRepo()

export const feedRepo = new FeedRepo(
  postBaseRepo,
  commentBaseRepo,
  likeBaseRepo,
  savedBaseRepo,
  reportBaseRepo
)
export const feedService = new FeedService(feedRepo)
export const feedController = new FeedController(feedService)