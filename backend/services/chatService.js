const Message = require("../models/Message");
const repo = require("../repositories/messageRepository");

const sendMessage = async (sender, receiver, content) => {
  const msg = new Message({ sender, receiver, content });
  return repo.saveMessage(msg);
};

module.exports = { sendMessage };
