const service = require("../services/authService");

const login = async (req, res) => {
  try {
    const user = await service.login(
      req.body.username,
      req.body.password
    );
    res.json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

const register = async (req, res) => {
  const user = await service.register(
    req.body.username,
    req.body.password
  );
  res.json(user);
};

module.exports = { login, register };
