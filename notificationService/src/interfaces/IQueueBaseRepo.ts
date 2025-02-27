import { INotification } from '../interfaces/INotification'

interface IQueueBaseRepo {
  connect(): Promise<void>
  publish(notification: INotification): Promise<void>
  subscribe(callback: (message: any) => void): Promise<void>
}

export default IQueueBaseRepo