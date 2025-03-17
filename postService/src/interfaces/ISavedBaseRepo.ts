import ISaved from '../interfaces/ISaved'

interface ISavedBaseRepo {
  isSavedExits(userId: string, postId: string): Promise<boolean>
  createSaved(savedData: Partial<ISaved>): Promise<ISaved>
  deleteByUserIdAndPostId(userId: string, postId: string): Promise<ISaved | null>
}

export default ISavedBaseRepo