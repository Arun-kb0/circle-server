import { Logger } from 'winston'
import fs, { promises as fsPromises } from 'fs'
import { join } from 'path'
import { prodLogger } from './prodLogger'
import { devLogger } from './devLogger'




let logger: Logger
if (process.env.NODE_ENV === 'prod') {
  logger = prodLogger()
} else {
  logger = devLogger()
}

export default logger