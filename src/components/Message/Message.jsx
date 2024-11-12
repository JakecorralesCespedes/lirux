import './Message.css';

function Message({ text, isUser }) {
  return (
    <div className={`message ${isUser ? 'user-message' : 'bot-message'}`}>
      {text}
    </div>
  );
}

export default Message; 