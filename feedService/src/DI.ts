import FeedRepo from './repositories/FeedRepo'
import FeedService from './services/FeedService'
import FeedController from './controllers/FeedController'


export const feedRepo = new FeedRepo()
export const feedService = new FeedService(feedRepo)
export const feedController = new FeedController(feedService)