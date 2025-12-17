import { useEffect } from 'react';

const MessageList = ({ messages, currentUser, markAsRead }) => {
  useEffect(() => {
    markAsRead();
  }, [messages, markAsRead]);

  return (
    <div className="message-list">
      {messages.map(msg => (
        <div key={msg.id} className={`message ${msg.senderId === currentUser.id ? 'sent' : 'received'}`}>
          <span className="sender">{msg.senderName}: </span>
          <span className="text">{msg.text}</span>
          <span className="status">{msg.status}</span>
          <span className="time">{new Date(msg.timestamp).toLocaleTimeString()}</span>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
