import React, { useEffect, useState } from "react";
import './App.css'

import Faq from "./components/Faq";
import Form from "./components/Form";
import MessageBox from "./components/MessageBox";

import {io} from "socket.io-client";
const socket = io("wss://travelchatbot-backend.azurewebsites.net");

function App() {
  const [messages, setMessages] = useState([
    {
      text: "Hello, Travelist Bot here, how can i help you?",
      position: "left",
    }
  ]);
  const [showQuestions, setShowQuestions] = useState(false);

  useEffect(() => {
    socket.on("answer", (data) => {
        setMessages([...messages, {text: data, position: "left"}])
    });

  }, [messages]);

  function onSubmitMessage(inputText) {
    setMessages([...messages, { text: inputText, position: "right" }]);
    socket.emit('question', inputText);
  }

  return (
    <div className="app">
      <div className="app__inner">
        <aside className={showQuestions ? "show" : ""}>
          <div className="aside__example-questions">
            <div className="example-questions__header">
              <h2>Try Asking</h2>
              <button onClick={() => setShowQuestions(!showQuestions)}>x</button>
            </div>
            <Faq />
          </div>
        </aside>

        <main>
          <div className="main__header">
            <h2>Travelist</h2>
            <button onClick={() => setShowQuestions(!showQuestions)}>☰</button>
          </div>
          <MessageBox messages={messages} />
          <Form onSubmitMessage={onSubmitMessage} />
        </main>
      </div>
    </div>
  );
}

export default App;
