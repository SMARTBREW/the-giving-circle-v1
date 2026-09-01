const objectId = (value, helpers) => {
  if (!value.match(/^[0-9a-fA-F]{24}$/)) {
    return helpers.message('"{{#label}}" must be a valid mongo id');
  }
  return value;
};

const mobile = (value, helpers) => {
  if (!value.match(/^\d{10}$/)) {
    return helpers.message('"{{#label}}" must be a valid 10 digit mobile');
  }
  return value;
};

const password = (value, helpers) => {
  if (value.length < 8) {
    return helpers.message('password must be at least 8 characters');
  }
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(value)) {
    return helpers.message(
      'password must contain uppercase, lowercase, number, and special character',
    );
  }
  return value;
};

module.exports = {
  objectId,
  mobile,
  password,
};
