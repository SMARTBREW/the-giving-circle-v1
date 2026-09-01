const cron = require('node-cron');
const logger = require('../config/logger');

const runHealthSweep = async () => {
  logger.info('Cron health sweep completed');
};

const startCrons = () => {
  cron.schedule('*/5 * * * *', async () => {
    try {
      await runHealthSweep();
    } catch (error) {
      logger.error('Cron job failed:', error);
    }
  });
};

startCrons();

module.exports = startCrons;
