import UseGcpBucket from '../config/UseGcpBucket'
import { v4 as uuid } from 'uuid'
import { imageFormats, videoFormats } from '../constants/fileFormats'

const storage = UseGcpBucket.getInstance()
const IMAGE_BUCKET_NAME = 'images'


export const uploadFile = async (files: Express.Multer.File[]) => {
  try {
    const bucket = storage.bucket(IMAGE_BUCKET_NAME)

    const publicUrls: string[] = []
    for (const file of files) {
      let filePath = ''
      if (imageFormats.includes(file.mimetype)) filePath = '/images'
      if (videoFormats.includes(file.mimetype)) filePath = '/videos'

      const filename = `${file.originalname}-${uuid}`
      const destination = `${filePath}/${filename}`
      const [fileUpload] = await bucket.upload(file.path, { destination })
      await fileUpload.makePublic()
      const publicUrl = `https://storage.googleapis.com/${IMAGE_BUCKET_NAME}/${destination}`;
      publicUrls.push(publicUrl)
    }
    return publicUrls
  } catch (error) {
    throw new Error('upload to bucket failed')
  }
}