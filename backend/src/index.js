const mongoose = require('mongoose');
const config = require('./config/config');
const logger = require('./config/logger');
const { server } = require('./app');

require('./crons/index');
require('./rabbit-mq/order');

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  logger.info('Connected to MongoDB');
  server.listen(config.port, () => {
    logger.info(`Listening on port ${config.port}`);
  });
}).catch((error) => {
  logger.error('MongoDB connection error:', error);
  process.exit(1);
});

let isShuttingDown = false;

const exitHandler = () => {
  if (isShuttingDown) return;
  isShuttingDown = true;

  if (server) {
    server.close(() => {
      logger.info('HTTP server closed');
      mongoose.connection.close().then(() => {
        logger.info('MongoDB connection closed');
        process.exit(0);
      });
    });
  } else {
    process.exit(0);
  }

  setTimeout(() => {
    logger.error('Forced shutdown after timeout');
    process.exit(1);
  }, 30000);
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);
process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  exitHandler();
});
process.on('SIGINT', () => {
  logger.info('SIGINT received');
  exitHandler();
});
