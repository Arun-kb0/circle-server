import express, { Express } from 'express'


class UseExpress {
  private static instance: Express | null = null

  static getInstance(): Express {
    if (!UseExpress.instance) {
      UseExpress.instance = express()
    }
    return UseExpress.instance
  }
}

export default UseExpress