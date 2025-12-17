import { useState, useEffect } from 'react';

const UserList = ({ onSelectUser, selectedUser }) => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', online: true },
    { id: 2, name: 'Bob', online: false },
    { id: 3, name: 'Charlie', online: true },
    { id: 4, name: 'Group Chat', online: true, isGroup: true },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setUsers(prev => prev.map(user => ({
        ...user,
        online: user.isGroup ? true : Math.random() > 0.5
      })));
    }, 10000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="user-list">
      <h3>Users</h3>
      <ul>
        {users.map(user => (
          <li
            key={user.id}
            className={selectedUser?.id === user.id ? 'selected' : ''}
            onClick={() => onSelectUser(user)}
          >
            {user.name} {user.online ? '🟢' : '🔴'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;