const User = require("../models/User");
const repo = require("../repositories/userRepository");

const register = async (username, password) => {
  const user = new User({ username, password });
  return repo.saveUser(user);
};

const login = async (username, password) => {
  const user = await repo.findByUsername(username);
  if (!user || user.password !== password) {
    throw new Error("Invalid credentials");
  }
  return user;
};

module.exports = { register, login };
