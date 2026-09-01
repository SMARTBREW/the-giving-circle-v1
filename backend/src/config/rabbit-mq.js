const amqp = require('amqplib');
const config = require('./config');
const logger = require('./logger');

const initRabbitMq = async () => {
  if (!config.rabbitmq.url) {
    logger.warn('RabbitMQ URL not set; skipping connection');
    return null;
  }

  const connection = await amqp.connect(config.rabbitmq.url);
  const channel = await connection.createChannel();
  logger.info('Connected to RabbitMQ');
  return channel;
};

module.exports = initRabbitMq;
