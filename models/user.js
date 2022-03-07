const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  uid: {
    type: String,
    required: true,
    unique: true
  },
  machineIds: {
    type: [String],
    required: true,
    default: []
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
