import React, { useState } from 'react';
import '../assets/style/chatbot.css';

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const sendMessage = () => {
    // Call API or use predefined responses
    if (userMessage.toLowerCase().includes('bmi')) {
      setBotResponse('I can help you calculate your BMI. Please provide your weight and height.');
    } else if (userMessage.toLowerCase().includes('exercise')) {
      setBotResponse('I can suggest exercises based on your BMI. Please tell me your BMI.');
    } else {
      setBotResponse('I am here to help. Can you please clarify your question?');
    }
  };

  return (
    <div className="chatbot-container">
      <h2>Chatbot</h2>
      <input
        type="text"
        placeholder="Ask me anything!"
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>

      {botResponse && (
        <div className="chatbot-response">
          <p>{botResponse}</p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;