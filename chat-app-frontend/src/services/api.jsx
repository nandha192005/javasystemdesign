
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const login = (data) => api.post("/auth/login", data);
export const register = (data) => api.post("/auth/register", data);
export const sendMessage = (data) => api.post("/chat/send", data);
