import ISaved from '../interfaces/ISaved'

interface ISavedBaseRepo {
  findSavedPostsByUserIdCount(userId: string): Promise<number>
  findSavedPostsByUserId(userId: string, limit: number, startIndex: number): Promise<ISaved[]>
}

export default ISavedBaseRepo