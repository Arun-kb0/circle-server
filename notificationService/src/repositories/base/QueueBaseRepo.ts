import { INotification } from "../../interfaces/INotification";
import IQueueBaseRepo from "../../interfaces/IQueueBaseRepo";
import amqp, { Connection, Channel, ConsumeMessage } from 'amqplib';
import handleError from '../../util/handleError'

const USER = process.env.RABIT_MQ_USER || ''
const PASSWORD = process.env.RABIT_MQ_PASSWORD || ''
const HOST = process.env.GT_QUEUE_HOST || 'localhost'
const PORT = process.env.GT_QUEUE_PORT || 5672
const RABBITMQ_URL = `amqp://${USER}:${PASSWORD}@${HOST}:${PORT}`
const QUEUE_NAME = process.env.NOTIFICATION_QUEUE_NAME || ''
console.log(RABBITMQ_URL)

class QueueBaseRepo implements IQueueBaseRepo {
  protected connection: Connection | null = null
  protected channel: Channel | null = null

  constructor(
  ) { }

  async connect(): Promise<void> {
    try {
      this.connection = await amqp.connect(RABBITMQ_URL)
      this.channel = await this.connection.createChannel()
      await this.channel.assertQueue(QUEUE_NAME, { durable: true })
      console.log(`connected to rabitmq and asserted queue ${QUEUE_NAME}`)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }

  async publish(notification: INotification): Promise<void> {
    try {
      if (!this.channel) {
        throw new Error('Channel is not initialized. Call connect() first.')
      }
      const payload = Buffer.from(JSON.stringify(notification))
      this.channel.sendToQueue(QUEUE_NAME, payload, { persistent: true })
      console.log(`Published message to ${QUEUE_NAME}:`, notification)
    } catch (error) {
      const err = handleError(error)
      throw new Error(err.message)
    }
  }
  async subscribe(callback: (message: any) => void): Promise<void> {
    try {
      if (!this.channel) {
        throw new Error('Channel is not initialized. Call connect() first.');
      }
      console.log(`[*] Waiting for messages in ${QUEUE_NAME}.`);

      this.channel.consume(
        QUEUE_NAME,
        (msg) => {
          if (msg) {
            console.log(`[x] Received: ${msg.content.toString()}`);
            this.channel!.ack(msg);
            const msgObj = JSON.parse(msg.content.toString());
            callback(msgObj);
          }
        },
        { noAck: false }
      );
    } catch (error) {
      const err = handleError(error);
      throw new Error(err.message);
    }
  }

}

export default QueueBaseRepo