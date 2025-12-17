import { useState } from "react";
import Login from "./components/Login";
import Chat from "./components/Chat";

function App() {
  const [user, setUser] = useState(null);
  return user ? <Chat user={user} /> : <Login onLogin={setUser} />;
}

export default App;
