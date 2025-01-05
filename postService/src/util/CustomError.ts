type LevelType = 'cnt' | 'svc' | 'other'

export class CustomError extends Error {
  code: number
  level: LevelType

  constructor(code: number, message: string, level: LevelType) {
    super(message)
    this.level = level
    this.code = code
    this.name = this.constructor.name;
    
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
  }

}