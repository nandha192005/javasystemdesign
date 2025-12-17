const service = require("../services/chatService");

const send = async (req, res) => {
  const msg = await service.sendMessage(
    req.body.sender,
    req.body.receiver,
    req.body.content
  );
  res.json(msg);
};

module.exports = { send };
