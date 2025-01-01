import { Logger } from 'winston'
import { prodLogger } from './prodLogger'
import { devLogger } from './devLogger'


let logger: Logger
if (process.env.NODE_ENV === 'prod') {
  logger = prodLogger()
} else {
  logger = devLogger()
}

export default logger