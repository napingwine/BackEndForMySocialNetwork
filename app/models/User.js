const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 255,
  },
  surname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 255,
  },
  password: {
    type: String,
    minlength: 5,
    maxlength: 255,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  verifiedAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  location: {
    country: {
      type: String,
      default: 'N/A'
    },
    city: {
      type: String,
      default: 'N/A'
    }
  },
  photo: {
    avatars: {
      type: Array,
      default: []
    }
  },
  status: {
    type: String,
    default: 'please fill up status'
  },
  followedUsersByMe: {
    type: Array,
    default: []
  },
  followers: {
    type: Array,
    default: []
  },
  followed: {
    type: Boolean,
    default: false
  },
  myTasks: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model("User", userSchema);