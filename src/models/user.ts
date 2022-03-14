import mongoose = require('mongoose');
import User = require('./../types/User');

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
  savedMachines: {
    type: [String],
    required: true,
    default: []
  },
  starredMachine: {
    type: String,
  }
});

const User = mongoose.model<User>('User', userSchema);

export = User;
