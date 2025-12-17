const Message = require("../models/Message");

const saveMessage = (msg) => msg.save();

const findChat = (sender, receiver) =>
  Message.find({
    $or: [
      { sender, receiver },
      { sender: receiver, receiver: sender }
    ]
  });

module.exports = { saveMessage, findChat };
