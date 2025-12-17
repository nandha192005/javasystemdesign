import { useState } from "react";
import { login, register } from "../services/api";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const submit = async () => {
    try {
      const apiCall = isRegister ? register : login;
      const res = await apiCall({ username, password });
      onLogin(res.data.username);
    } catch (err) {
      alert(err.response?.data?.error || "Error");
    }
  };

  return (
    <>
      <h3>{isRegister ? "Register" : "Login"}</h3>

      <input
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={submit}>
        {isRegister ? "Register" : "Login"}
      </button>

      <p onClick={() => setIsRegister(!isRegister)} style={{ cursor: "pointer" }}>
        {isRegister ? "Already have an account? Login" : "New user? Register"}
      </p>
    </>
  );
}
