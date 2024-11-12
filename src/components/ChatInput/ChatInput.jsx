import { useState } from 'react';
import { useChat } from '../../context/ChatContext';
import SendIcon from '@mui/icons-material/Send';
import './ChatInput.css';

function ChatInput() {
  const [input, setInput] = useState('');
  const { sendMessage, loading } = useChat();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() && !loading) {
      await sendMessage(input);
      setInput('');
    }
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe tu mensaje aquí..."
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        <SendIcon />
      </button>
    </form>
  );
}

export default ChatInput; 