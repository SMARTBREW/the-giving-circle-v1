const httpStatus = require('http-status');
const mongoose = require('mongoose');
const catchAsync = require('../utils/catchAsync');

const health = (req, res) => {
  res.status(httpStatus.OK).send({ status: 'ok', timestamp: new Date().toISOString() });
};

const ready = catchAsync(async (req, res) => {
  await mongoose.connection.db.admin().ping();
  res.status(httpStatus.OK).send({ status: 'ready' });
});

module.exports = {
  health,
  ready,
};
