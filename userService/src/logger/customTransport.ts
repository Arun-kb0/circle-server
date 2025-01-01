import winston, { format, LogEntry } from "winston";
import Transport, { TransportStreamOptions } from "winston-transport";
import 'winston-mongodb'

const { timestamp, printf, json, combine } = format
const URL = process.env.LOGGER_DB || ''

export class CustomTransport extends Transport {
  constructor(opts: TransportStreamOptions) {
    super(opts)
  }

  log(info: LogEntry, callback: () => void) {
    setImmediate(() => {
      this.emit('logged', info)
    })
    const { level, message, logData, filename } = info

    const logger = winston.createLogger({
      format: combine(
        timestamp(),
        json(),
        printf(({ timestamp, level, message, ...data }) => {
          const response = {
            level,
            message,
            logData,
            timestamp
          }
          return JSON.stringify(response)
        }),
      ),

      transports: [
        new winston.transports.MongoDB({
          db: URL,
          capped: true,
          cappedSize: 5000,
          cappedMax: 20,
          collection: 'user-service-logs'
        })
      ]
    })

    logger.log({ level, message, logData })
    callback()
  }

}