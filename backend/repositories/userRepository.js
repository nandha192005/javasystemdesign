const User = require("../models/User");

const findByUsername = (username) =>
  User.findOne({ username });

const saveUser = (user) =>
  user.save();

module.exports = { findByUsername, saveUser };
