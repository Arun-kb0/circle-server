import { Storage } from "@google-cloud/storage"

const PROJECT_ID = process.env.GCP_PROJECT_ID || ''
const BUCKET_NAME = process.env.GCP_BUCKET_NAME || ''
const KEYFILE_NAME = process.env.GCP_KEYFILE_NAME || ''

class UseGpcBucket {
  private static instance: Storage | null = null

  static getInstance(): Storage {
    if (!UseGpcBucket.instance) {
      UseGpcBucket.instance = new Storage({
        projectId: PROJECT_ID,
        keyFilename: KEYFILE_NAME
      })
    }
    return UseGpcBucket.instance
  }

}

export default UseGpcBucket