const request = require('supertest');
const httpStatus = require('http-status');
const { app } = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');
const { User } = require('../../src/models');

setupTestDB();

describe('Auth routes', () => {
  describe('POST /v1/auth/register', () => {
    test('should return 201 and successfully register user if request data is ok', async () => {
      const newUser = {
        name: 'Ayush',
        email: 'ayush@example.com',
        mobile: '9876543210',
        password: 'Password1!',
      };
      const res = await request(app).post('/v1/auth/register').send(newUser).expect(httpStatus.CREATED);
      expect(res.body.user).not.toHaveProperty('password');
      const dbUser = await User.findById(res.body.user.id);
      expect(dbUser).toBeDefined();
    });

    test('should return 400 if validation fails', async () => {
      const res = await request(app).post('/v1/auth/register').send({ email: 'bad' }).expect(httpStatus.BAD_REQUEST);
      expect(res.body.message).toBe('Validation failed');
    });
  });
});
