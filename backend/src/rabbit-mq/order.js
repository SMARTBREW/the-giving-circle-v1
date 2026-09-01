const logger = require('../config/logger');
const initRabbitMq = require('../config/rabbit-mq');

let channel = null;

const sendNotification = async (body) => {
  try {
    if (!body.message) throw new Error('message is required');
    if (!channel) {
      logger.warn('RabbitMQ channel not ready');
      return;
    }

    const queue = 'notifications';
    await channel.assertQueue(queue, { durable: true });

    const payload = {
      timestamp: new Date().toISOString(),
      ...body,
    };

    channel.sendToQueue(queue, Buffer.from(JSON.stringify(payload)), {
      persistent: true,
    });

    logger.info('Notification sent to queue:' + JSON.stringify(payload));
  } catch (error) {
    logger.error('Failed to send notification:' + JSON.stringify(error.message));
  }
};

const onNotification = async () => {
  const queue = 'notifications';
  await channel.assertQueue(queue, { durable: true });
  channel.consume(
    queue,
    async (msg) => {
      try {
        const data = JSON.parse(msg.content.toString());
        if (!data.message) {
          throw new Error('message is required');
        }
        logger.info({ 'rabbit-mq': data });
        channel.ack(msg);
      } catch (error) {
        logger.error('Error processing message:', JSON.stringify(error));
        channel.nack(msg, false, false);
      }
    },
    { noAck: false },
  );
};

const start = async () => {
  try {
    channel = await initRabbitMq();
    if (!channel) return;
    await onNotification();
    logger.info('RabbitMQ setup completed and listening for messages.');
  } catch (error) {
    logger.error('Failed to start RabbitMQ:' + JSON.stringify(error));
  }
};

start();

module.exports = { sendNotification };
