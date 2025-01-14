import UseGpcBucket from "../config/UseGcpBucket"

const storage = UseGpcBucket.getInstance()
const IMAGE_BUCKET_NAME = 'images'

export const uploadImage = async (bucket: string, files: File[], dest: string) => {
  try {
    const bucket = storage.bucket(IMAGE_BUCKET_NAME)
    // const urls = files.map(async (file) => {
    //   return await bucket.upload(file, {
    //     destination: dest
    //   })
    // })

  } catch (error) {
    console.error(error)
  }
}

