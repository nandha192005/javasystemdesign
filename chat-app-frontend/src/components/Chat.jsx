import { useState } from "react";
import { sendMessage } from "../services/api";

export default function Chat({ user }) {
  const [to, setTo] = useState("");
  const [msg, setMsg] = useState("");

  const send = async () => {
    if (!to || !msg) return alert("Enter receiver and message");

    await sendMessage({
      sender: user,
      receiver: to,
      content: msg
    });

    setMsg("");
  };

  return (
    <>
      <h3>Logged in as: {user}</h3>

      <input
        placeholder="Send to"
        onChange={e => setTo(e.target.value)}
      />

      <input
        placeholder="Message"
        value={msg}
        onChange={e => setMsg(e.target.value)}
      />

      <button onClick={send}>Send</button>
    </>
  );
}
