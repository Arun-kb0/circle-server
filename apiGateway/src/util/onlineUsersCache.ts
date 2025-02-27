import RedisClient from '../config/RedisClient'

const redisClient = RedisClient.getInstance()
const HASHMAP_NAME = 'online-users'

export const setOnlineUser = async (userId: string, socketId: string) => {
  try {
    await redisClient.hset(HASHMAP_NAME, userId, socketId)
    console.log(`User ${userId} with socket ${socketId} added to Redis.`)
  } catch (error) {
    console.log('Redis add data failed')
    console.error(error)
  }
}

export const getOnlineUsers = async () => {
  try {
    const users = await redisClient.hgetall(HASHMAP_NAME)
    if (!users) throw new Error('No users found in Redis')
    return users
  } catch (error) {
    console.log('Redis get data failed')
    console.error(error)
    return {}
  }
}

export const getOnlineUserKeys = async () => {
  try {
    const userKeys = await redisClient.hkeys(HASHMAP_NAME)
    return userKeys
  } catch (error) {
    console.log('Redis get keys failed');
    console.error(error);
    return [];
  }
};


export const getSingleOnlineUser = async (userId: string) => {
  try {
    const user = await redisClient.hget(HASHMAP_NAME, userId)
    if (!user) throw new Error(`No user found in Redis with userId ${userId}`)
    return user
  } catch (error) {
    console.log('Redis get data failed')
    console.error(error)
    return null
  }
}

export const removeSingleOnlineUser = async (userId: string) => {
  try {
    console.log('remove online user called with ',userId)
    const user = await redisClient.hdel(HASHMAP_NAME, userId)
    if (!user) throw new Error(`No user found in Redis with userId ${userId}`)
    return user
  } catch (error) {
    console.log('Redis get data failed')
    console.error(error)
    return null
  }
}


