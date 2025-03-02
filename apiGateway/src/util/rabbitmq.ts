import amqp, { ConsumeMessage } from 'amqplib'

const USER = process.env.POST_RABBITMQ_USER
const PASSWORD = process.env.POST_RABBITMQ_PASSWORD
const HOST = process.env.GT_QUEUE_HOST || 'localhost'
const PORT = process.env.GT_QUEUE_PORT || 5672
const RABBITMQ_URL = `amqp://${USER}:${PASSWORD}@${HOST}:${PORT}`


export const publishMessage = async (queue: string, message: string) => {
  try {
    const connection = await amqp.connect(RABBITMQ_URL)
    const channel = await connection.createChannel()

    await channel.assertQueue(queue, { durable: true })
    channel.sendToQueue(queue, Buffer.from(message))
    console.log(`[x] Sent: ${message}`);
  } catch (error) {
    console.error('Error in publisher:', error);
  }
}


export const consumeMessage = async (queue: string): Promise<ConsumeMessage | null> => {
  return new Promise(async (resolve, reject) => {
   
    try {
      const connection = await amqp.connect(RABBITMQ_URL);
      const channel = await connection.createChannel();
  
      await channel.assertQueue(queue, { durable: true });
      console.log(`[*] Waiting for messages in ${queue}.`);
  
      // let message: ConsumeMessage | null = null;
  
      channel.consume(
        queue,
        (msg) => {
          if (msg) {
            console.log(`[x] Received: ${msg.content.toString()}`);
            // message = msg; 
            channel.ack(msg); 
            resolve(msg)
          }
        },
        { noAck: false }
      );
  
      // return new Promise((resolve) => {
      //   setTimeout(() => resolve(message), 500) 
      // });
    } catch (error) {
      console.error('Error in consumeMessage:', error);
      // return null;
      reject(error)
    }

  })
};