import Redis from 'ioredis';

const HOST = process.env.POST_CACHE_HOST || 'localhost'
const PORT = process.env.POST_CACHE_PORT || 6379

class RedisClient {
  private static instance: Redis | null = null;
  private static retryCount: number = 0;
  private static readonly MAX_RETRIES: number = 5;

  private constructor() { }


  public static getInstance(): Redis {
    if (!RedisClient.instance) {
      RedisClient.instance = new Redis({
        host: HOST,
        port: Number(PORT),
        retryStrategy: (times) => {
          if (RedisClient.retryCount >= RedisClient.MAX_RETRIES) {
            console.log('Max retries reached. Stopping connection attempts.');
            return null;
          }

          RedisClient.retryCount++
          const delay = Math.min(times * 50, 2000); // Exponential backoff, 50ms -> 100ms -> 150ms 
          console.log(`Retrying connection in ${delay} ms...`);
          return delay;
        },
      });
    }

    RedisClient.instance.on('error', (err) => {
      console.error('Redis connection error:', err);
    });

    RedisClient.instance.on('ready', () => {
      console.log('Redis connection is ready.');
      RedisClient.retryCount = 0
    });

    RedisClient.instance.on('close', () => {
      console.log('Redis connection closed.');
      RedisClient.instance = null
      RedisClient.retryCount = 0
    });
    return RedisClient.instance;
  }

}

export default RedisClient;
