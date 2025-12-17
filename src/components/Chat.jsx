import { useState, useEffect } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const Chat = ({ selectedUser, currentUser }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (selectedUser) {
      setMessages([
        { id: 1, text: 'Hello!', senderId: selectedUser.id, senderName: selectedUser.name, timestamp: Date.now() - 60000, status: 'read' },
        { id: 2, text: 'Hi there!', senderId: currentUser.id, senderName: currentUser.name, timestamp: Date.now() - 30000, status: 'read' },
      ]);
    }
  }, [selectedUser, currentUser]);

  useEffect(() => {
    if (!selectedUser || selectedUser.isGroup) return;
    const interval = setInterval(() => {
      const mockMessages = ['How are you?', 'Nice to meet you!', 'What\'s up?'];
      const randomMsg = mockMessages[Math.floor(Math.random() * mockMessages.length)];
      const newMsg = {
        id: Date.now(),
        text: randomMsg,
        senderId: selectedUser.id,
        senderName: selectedUser.name,
        timestamp: Date.now(),
        status: 'delivered'
      };
      setMessages(prev => [...prev, newMsg]);
    }, 10000); 
    return () => clearInterval(interval);
  }, [selectedUser]);

  const sendMessage = (text) => {
    const newMsg = {
      id: Date.now(),
      text,
      senderId: currentUser.id,
      senderName: currentUser.name,
      timestamp: Date.now(),
      status: 'sent'
    };
    setMessages(prev => [...prev, newMsg]);

    setTimeout(() => {
      setMessages(prev => prev.map(msg => msg.id === newMsg.id ? { ...msg, status: 'delivered' } : msg));
    }, 1000);
    setTimeout(() => {
      setMessages(prev => prev.map(msg => msg.id === newMsg.id ? { ...msg, status: 'read' } : msg));
    }, 2000);
  };

  const markAsRead = () => {
    setMessages(prev => prev.map(msg => 
      msg.senderId !== currentUser.id && msg.status !== 'read' ? { ...msg, status: 'read' } : msg
    ));
  };

  if (!selectedUser) {
    return <div className="chat">Select a user to start chatting</div>;
  }

  return (
    <div className="chat">
      <h3>Chat with {selectedUser.name}</h3>
      <MessageList messages={messages} currentUser={currentUser} markAsRead={markAsRead} />
      <MessageInput onSendMessage={sendMessage} />
    </div>
  );
};

export default Chat;