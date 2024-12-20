class HttpError extends Error {
  isOperational: boolean
  status: string

  constructor(
    public statusCode: number,
    public message: string
  ) {
    super(message)
    this.statusCode = statusCode
    this.status = (statusCode >= 400 && statusCode <= 500) ? 'fail' : 'error'

    this.isOperational = true
    Error.captureStackTrace(this, this.constructor)
  }


}

export default HttpError
