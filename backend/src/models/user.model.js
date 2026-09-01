const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const { roles } = require('../config/roles');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 10,
      index: true,
      validate(value) {
        if (!validator.isNumeric(value)) {
          throw new Error('Invalid number');
        }
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      private: true,
      validate: {
        validator(value) {
          if (typeof value === 'string' && value.startsWith('$2')) {
            return true;
          }
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
        },
        message:
          'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character',
      },
    },
    role: {
      type: String,
      enum: roles,
      default: 'user',
      index: true,
    },
    employeeId: {
      type: String,
      unique: true,
      index: true,
    },
    loginAttempts: {
      type: Number,
      default: 0,
    },
    lockUntil: {
      type: Date,
      default: null,
    },
    passwordHistory: [{ type: String }],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      index: true,
    },
  },
  {
    timestamps: true,
    toObject: { getters: true },
    toJSON: { getters: true },
  },
);

userSchema.index({ role: 1, createdAt: -1 });
userSchema.index({ createdAt: -1 });

userSchema.methods.isPasswordMatch = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.transform = function () {
  const user = this.toObject();
  user.id = user._id.toString();
  delete user.password;
  delete user.passwordHistory;
  delete user.loginAttempts;
  delete user.lockUntil;
  delete user.__v;
  return user;
};

userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

userSchema.statics.isMobileTaken = async function (mobile, excludeUserId) {
  const user = await this.findOne({ mobile, _id: { $ne: excludeUserId } });
  return !!user;
};

userSchema.methods.isPasswordInHistory = async function (newPassword) {
  for (const oldPasswordHash of this.passwordHistory) {
    if (await bcrypt.compare(newPassword, oldPasswordHash)) {
      return true;
    }
  }
  return false;
};

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    if (await this.isPasswordInHistory(this.password)) {
      return next(new Error('Password cannot be reused'));
    }
    const hashed = await bcrypt.hash(this.password, 8);
    this.passwordHistory.push(hashed);
    if (this.passwordHistory.length > 5) {
      this.passwordHistory.shift();
    }
    this.password = hashed;
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
