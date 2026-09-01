const mongoose = require('mongoose');

const counterSchema = mongoose.Schema(
  {
    sequenceName: { type: String, required: true, unique: true, index: true },
    sequenceValue: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const Counter = mongoose.model('Counter', counterSchema);

module.exports = Counter;
