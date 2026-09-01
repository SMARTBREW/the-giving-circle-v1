const jwt = require('jsonwebtoken');
const moment = require('moment');
const httpStatus = require('http-status');
const config = require('../config/config');
const { Token } = require('../models');
const ApiError = require('../utils/ApiError');

const generateToken = (user, expires, secret = config.jwt.secret) => {
  const payload = {
    id: user.id,
    role: user.role,
    iat: moment().unix(),
    exp: expires.unix(),
  };
  return jwt.sign(payload, secret, { algorithm: 'HS256' });
};

const generateRefreshToken = (user, expires) => {
  return generateToken(user, expires, config.jwt.refreshSecret);
};

const saveToken = async (token, userId, expires, type, blacklisted = false) => {
  const tokenDoc = await Token.create({
    token,
    user: userId,
    expires: expires.toDate(),
    type,
    blacklisted,
  });
  return tokenDoc;
};

const verifyToken = async (token, type = 'refresh') => {
  const secret = type === 'refresh' ? config.jwt.refreshSecret : config.jwt.secret;
  const payload = jwt.verify(token, secret);
  const tokenDoc = await Token.findOne({
    token,
    type,
    user: payload.id,
    blacklisted: false,
  });
  if (!tokenDoc) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Token not found');
  }
  return tokenDoc;
};

const generateAuthTokens = async (user) => {
  const accessTokenExpires = moment().add(config.jwt.accessExpirationMinutes, 'minutes');
  const accessToken = generateToken(user, accessTokenExpires);

  const refreshTokenExpires = moment().add(config.jwt.refreshExpirationDays, 'days');
  const refreshToken = generateRefreshToken(user, refreshTokenExpires);
  await saveToken(refreshToken, user.id, refreshTokenExpires, 'refresh');

  return {
    access: { token: accessToken, expires: accessTokenExpires.toDate() },
    refresh: { token: refreshToken, expires: refreshTokenExpires.toDate() },
  };
};

const generateResetPasswordToken = async (user) => {
  const expires = moment().add(30, 'minutes');
  const resetToken = generateToken(user, expires);
  await saveToken(resetToken, user.id, expires, 'resetPassword');
  return resetToken;
};

module.exports = {
  generateToken,
  generateRefreshToken,
  generateAuthTokens,
  saveToken,
  verifyToken,
  generateResetPasswordToken,
};
