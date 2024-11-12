import { useEffect, useRef } from 'react';
import { useChat } from '../../context/ChatContext';
import Message from '../Message/Message';
import ChatInput from '../ChatInput/ChatInput';
import './ChatBox.css';

function ChatBox() {
  const { messages } = useChat();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-box">
      <div className="chat-header">
        <i className="fas fa-cross"></i>
        <span>Asistente Virtual</span>
      </div>
      
      <div className="messages-container">
        {messages.map((message, index) => (
          <Message 
            key={index}
            text={message.text}
            isUser={message.isUser}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <ChatInput />
    </div>
  );
}

export default ChatBox; 