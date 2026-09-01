const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');
const { getQueryOptions } = require('../utils/query.utils');
const { User } = require('../models');
const { userService } = require('../services');
const logger = require('../config/logger');

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body, req.user._id);
  logger.info('User created', { correlationId: req.correlationId, userId: user.id });
  res.status(httpStatus.CREATED).send(user.transform());
});

const getUsers = catchAsync(async (req, res) => {
  const filter = {};
  if (req.query.name) {
    filter.name = { $regex: req.query.name, $options: 'i' };
  }
  if (req.query.role) {
    filter.role = req.query.role;
  }
  const options = getQueryOptions(req.query);
  const [users, total] = await Promise.all([
    User.find(filter, null, options).populate('createdBy', 'name email mobile'),
    User.countDocuments(filter),
  ]);
  const data = users.map((user) => user.transform());
  res.send({
    data,
    pagination: {
      total,
      page: options.skip / options.limit + 1,
      totalPages: Math.ceil(total / options.limit),
    },
  });
});

const getUser = catchAsync(async (req, res) => {
  const user = await User.findById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user.transform());
});

const updateUser = catchAsync(async (req, res) => {
  const user = await User.findById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (req.body.email && (await User.isEmailTaken(req.body.email, user.id))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  if (req.body.mobile && (await User.isMobileTaken(req.body.mobile, user.id))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Mobile already taken');
  }
  Object.assign(user, req.body);
  await user.save();
  res.send(user.transform());
});

const deleteUser = catchAsync(async (req, res) => {
  const user = await User.findById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.deleteOne();
  res.status(httpStatus.NO_CONTENT).send();
});

const getUsersByIds = catchAsync(async (req, res) => {
  const ids = req.query.ids.split(',');
  const users = await User.find({ _id: { $in: ids } });
  res.send(users.map((user) => user.transform()));
});

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getUsersByIds,
};
