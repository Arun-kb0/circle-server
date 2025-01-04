import { Logger } from 'winston'
import fs, { promises as fsPromises } from 'fs'
import { prodLogger } from './prodLogger'
import { devLogger } from './devLogger'
import { join } from 'path'

const DIR_SIZE_LIMIT = 1024 * 1024

const getFolderSize = async (folderPath: string) => {
  const files = await fsPromises.readdir(folderPath, { withFileTypes: true })
  let totalSize = 0

  for (const file of files) {
    const filePath = join(folderPath, file.name)
    const stat = await fsPromises.stat(filePath)
    if (stat.isFile()) {
      totalSize += stat.size
    }
  }
  return totalSize
}

const createDir = async () => {
  const curDir = process.cwd()
  const logDir = join(curDir, '..', '..', 'logs')
  if (fs.existsSync(logDir)) {
    const size = await getFolderSize(logDir)
    if (size > DIR_SIZE_LIMIT) {
      console.warn('Logs folder exceeds 1 MB. Deleting...');
      await fsPromises.rm(logDir, { recursive: true, force: true })
    }
  }
  if (!fs.existsSync(logDir)) {
    await fsPromises.mkdir(logDir)
  }
}


createDir()
let logger: Logger
if (process.env.NODE_ENV === 'prod') {
  logger = prodLogger()
} else {
  logger = devLogger()
}

export default logger