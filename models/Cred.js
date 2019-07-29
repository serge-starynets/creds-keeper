const mongoose = require('mongoose');

const CredSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'other'
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('cred', CredSchema);