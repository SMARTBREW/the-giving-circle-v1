const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

const adminAuth = () => (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return next(new ApiError(httpStatus.FORBIDDEN, 'Forbidden'));
  }
  next();
};

module.exports = adminAuth;
