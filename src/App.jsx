import { useState } from 'react';
import Login from './components/Login';
import UserList from './components/UserList';
import Chat from './components/Chat';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleLogin = (username) => {
    setCurrentUser({ id: Date.now(), name: username });
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="app">
      {!currentUser ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div className="main">
          <UserList onSelectUser={handleSelectUser} selectedUser={selectedUser} />
          <Chat selectedUser={selectedUser} currentUser={currentUser} />
        </div>
      )}
    </div>
  );
}

export default App;
