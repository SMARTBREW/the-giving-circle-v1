const logger = require('../config/logger');

const MAX_FILE_SIZE = 100 * 1024 * 1024;

const parsefile = async () => {
  logger.warn('File parser is not configured until AWS credentials are set');
  throw new Error('File upload is not configured');
};

const getPresignedUrl = async (key, expiresIn = 86400) => {
  logger.info('Presigned URL requested', { key, expiresIn });
  throw new Error('File upload is not configured');
};

module.exports = {
  parsefile,
  getPresignedUrl,
  MAX_FILE_SIZE,
};
