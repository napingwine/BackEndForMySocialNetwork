const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: '',
  },
  uploadDate: {
    type: Date,
    default: new Date.now(),
  },
  location: {
    type: String,
    default: 'unknown',
  }
});

module.exports = mongoose.model('Photo', userSchema);