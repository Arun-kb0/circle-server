import RedisClient from '../config/RedisClient'
import IPost from '../interfaces/IPost'

const redisClient = RedisClient.getInstance()
const QUEUE_NAME = 'post-popular'

export const getPopularPostsFromCache = async (startIdx: number, endIdx: number) => {
  try {
    const len = await redisClient.llen(QUEUE_NAME)
    if (!len || startIdx >= len) return { posts: [], isCacheExhausted: true }
    if (endIdx >= len) endIdx = len - 1;

    const postsInCache = await redisClient.lrange(QUEUE_NAME, startIdx, endIdx)
    const posts = postsInCache.map(post => JSON.parse(post) as IPost)
    return { posts, isCacheExhausted: false }
  } catch (error) {
    console.log('get popular posts from cache failed')
    console.log(error)
    return { posts: [], isCacheExhausted: true }
  }
}

export const getCachedPostCount = async () => {
  try {
    const count = await redisClient.llen(QUEUE_NAME)
    return count
  } catch (error) {
    console.log(error)
    return 0
  }
}

