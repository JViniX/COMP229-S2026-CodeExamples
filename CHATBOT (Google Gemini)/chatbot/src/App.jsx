/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    

    const sendMessage = async () => {
        if (!userInput.trim()) return;

        const newMessage = { text: userInput, sender: 'user' };
        setMessages([...messages, newMessage]);
        setUserInput('');

        try {
            const response = await axios.post('http://localhost:5000/chat', { message: userInput });
            const aiMessage = { text: response.data.response, sender: 'ai' }; // Adjust based on your response format
            setMessages(prevMessages => [...prevMessages, aiMessage]);
        } catch (error) {
            console.error('Error:', error);
            const errorMessage = { text: 'Error communicating with AI.', sender: 'ai' };
            setMessages(prevMessages => [...prevMessages, errorMessage]);
        }
    };

    //const response = await axios.post('/chat', { message: userInput });
    //const aiMessage = { text: response.data.response, sender: "ai"}; // Adjust based on your response format
    return (
        <div className="chat-container">
            <div className="chat-box">
                {messages.map((msg, index) => (
                    <p key={index} className={msg.sender}>
                        {msg.sender === 'user' ? 'You: ' : 'AI: '}{msg.text}
                    </p>
                ))}
            </div>
            <input
                type="text"
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                placeholder="Type your message here..."
                onKeyPress={e => {
                    if (e.key === 'Enter') sendMessage();
                }}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default App;


