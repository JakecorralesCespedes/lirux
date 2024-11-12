import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([
    { 
      text: '¡Bienvenido a Radio Lira 88.7 FM! ¿En qué puedo ayudarte hoy?', 
      isUser: false 
    }
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text) => {
    try {
      setLoading(true);
      // Agregar mensaje del usuario
      setMessages(prev => [...prev, { text, isUser: true }]);
      
      // Obtener respuesta del servidor
      const response = await axios.post('http://localhost:3000/api/chat', { message: text });
      
      // Agregar respuesta del bot
      setMessages(prev => [...prev, { 
        text: response.data.response, 
        isUser: false 
      }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { 
        text: 'Lo siento, ha ocurrido un error. Por favor, intenta de nuevo más tarde.',
        isUser: false 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    messages,
    loading,
    sendMessage
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
} 