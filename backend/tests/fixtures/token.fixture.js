const moment = require('moment');
const { tokenService } = require('../../src/services');
const { userOne, admin } = require('./user.fixture');

const accessTokenExpires = moment().add(15, 'minutes');

const userOneAccessToken = tokenService.generateToken(userOne, accessTokenExpires);
const adminAccessToken = tokenService.generateToken(admin, accessTokenExpires);

module.exports = {
  userOneAccessToken,
  adminAccessToken,
};
