const httpStatus = require('http-status');
const ApiError = require('../../../src/utils/ApiError');
const { errorConverter } = require('../../../src/middlewares/error');

describe('Error middleware', () => {
  test('should convert a generic error to ApiError', () => {
    const err = new Error('boom');
    const next = jest.fn();
    errorConverter(err, {}, {}, next);
    expect(next).toHaveBeenCalled();
    const converted = next.mock.calls[0][0];
    expect(converted).toBeInstanceOf(ApiError);
    expect(converted.statusCode).toBe(httpStatus.INTERNAL_SERVER_ERROR);
  });
});
