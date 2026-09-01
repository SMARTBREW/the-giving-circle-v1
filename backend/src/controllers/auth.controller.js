const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');
const { generateEmployeeId } = require('../helpers/user.helper');
const { User, Token } = require('../models');
const { tokenService, emailService } = require('../services');
const logger = require('../config/logger');

const MAX_LOGIN_ATTEMPTS = 5;
const LOCK_TIME = 2 * 60 * 60 * 1000;

const register = catchAsync(async (req, res) => {
  if (await User.isEmailTaken(req.body.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  if (await User.isMobileTaken(req.body.mobile)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Mobile already taken');
  }
  const employeeId = await generateEmployeeId();
  const user = await User.create({ ...req.body, employeeId });
  const tokens = await tokenService.generateAuthTokens(user);
  logger.info('User created', { correlationId: req.correlationId, userId: user.id, email: user.email });
  res.status(httpStatus.CREATED).send({ user: user.transform(), tokens });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid credentials');
  }

  if (user.lockUntil && user.lockUntil > Date.now()) {
    const remainingTime = Math.ceil((user.lockUntil - Date.now()) / 1000 / 60);
    throw new ApiError(httpStatus.FORBIDDEN, `Account locked. Try again in ${remainingTime} minutes`);
  }

  const isPasswordMatch = await user.isPasswordMatch(password);

  if (!isPasswordMatch) {
    if (user.loginAttempts < MAX_LOGIN_ATTEMPTS) {
      await User.findByIdAndUpdate(user._id, { $inc: { loginAttempts: 1 } });
    } else {
      await User.findByIdAndUpdate(user._id, {
        loginAttempts: 0,
        lockUntil: Date.now() + LOCK_TIME,
      });
      throw new ApiError(httpStatus.FORBIDDEN, 'Account locked due to too many failed attempts');
    }
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid credentials');
  }

  if (user.loginAttempts > 0 || user.lockUntil) {
    await User.findByIdAndUpdate(user._id, { loginAttempts: 0, lockUntil: null });
  }

  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user: user.transform(), tokens });
});

const refreshTokens = catchAsync(async (req, res) => {
  const { refreshToken } = req.body;
  const tokenDoc = await tokenService.verifyToken(refreshToken, 'refresh');
  const user = await User.findById(tokenDoc.user);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  await Token.findByIdAndUpdate(tokenDoc._id, { blacklisted: true });
  const tokens = await tokenService.generateAuthTokens(user);
  res.send(tokens);
});

const logout = catchAsync(async (req, res) => {
  const tokenDoc = await Token.findOne({
    token: req.body.refreshToken,
    type: 'refresh',
    blacklisted: false,
  });
  if (!tokenDoc) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Token not found');
  }
  await Token.findByIdAndUpdate(tokenDoc._id, { blacklisted: true });
  res.status(httpStatus.NO_CONTENT).send();
});

const forgotPassword = catchAsync(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  const resetToken = await tokenService.generateResetPasswordToken(user);
  await emailService.sendResetPasswordEmail(user.email, resetToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const resetPassword = catchAsync(async (req, res) => {
  const tokenDoc = await tokenService.verifyToken(req.query.token, 'resetPassword');
  const user = await User.findById(tokenDoc.user);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  user.password = req.body.password;
  await user.save();
  await Token.updateMany({ user: user.id, type: 'refresh' }, { blacklisted: true });
  await Token.findByIdAndUpdate(tokenDoc._id, { blacklisted: true });
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  register,
  login,
  refreshTokens,
  logout,
  forgotPassword,
  resetPassword,
};
