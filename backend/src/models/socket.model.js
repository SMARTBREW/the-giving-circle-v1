const mongoose = require('mongoose');

const socketSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    socketId: { type: String, required: true },
    connected: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const Socket = mongoose.model('Socket', socketSchema);

module.exports = Socket;
