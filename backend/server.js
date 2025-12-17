const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authController = require("./controllers/authController");
const chatController = require("./controllers/chatController");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Auth APIs
app.post("/auth/login", authController.login);
app.post("/auth/register", authController.register);

// Chat API
app.post("/chat/send", chatController.send);

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
