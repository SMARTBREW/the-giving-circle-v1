const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { generateEmployeeId, generatedPassword } = require('../helpers/user.helper');
const { User } = require('../models');
const emailService = require('./email.service');
const logger = require('../config/logger');

const createUser = async (userBody, createdBy) => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  if (await User.isMobileTaken(userBody.mobile)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Mobile already taken');
  }
  const employeeId = await generateEmployeeId();
  const password = userBody.password || generatedPassword();
  const user = await User.create({ ...userBody, employeeId, password, createdBy });
  if (!userBody.password) {
    try {
      await emailService.sendApprovalEmail(user.email, user.email, user.name, password);
    } catch (error) {
      logger.error('Email send failed', { userId: user.id, message: error.message });
    }
  }
  return user;
};

module.exports = {
  createUser,
};
