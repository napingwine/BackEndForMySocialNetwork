const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userID: {
    type: String,
    default: 'user ID'
  },
  description: {
    type: String,
    default: 'description'
  },
  creationDate: {
    type: String,
  },
  deadlineDate: {
    type: String,
  },
  status: {
    type: String,
    default: 'created'
  }
});

module.exports = mongoose.model("Task", userSchema);