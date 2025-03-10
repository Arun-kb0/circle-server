import ISaved from '../../interfaces/ISaved';
import ISavedBaseRepo from '../../interfaces/ISavedBaseRepo'
import handleError from '../../util/handleError'
import { convertISavedDbToISaved, convertToObjectId } from '../../util/converter'
import { Saved } from '../../model/savedModel';

class SavedBaseRepo implements ISavedBaseRepo {

  async findSavedPostsByUserIdCount(userId: string): Promise<number> {
    try {
      const userObjId = convertToObjectId(userId)
      const count = await Saved.countDocuments({ userId: userObjId })
      return count
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async findSavedPostsByUserId(userId: string, limit: number, startIndex: number): Promise<ISaved[]> {
    try {
      const userObjId = convertToObjectId(userId)
      const savedData = await Saved.find({ userId: userObjId }).sort({ createdAt: -1 }).limit(limit).skip(startIndex)
      const convertedSaved = savedData.map(post => convertISavedDbToISaved(post))
      return convertedSaved
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }


}

export default SavedBaseRepo