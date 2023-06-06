import React, { useState } from "react";
import './App.css'


import Form from "./components/Form";
import MessageBox from "./components/MessageBox";



function App() {
  /*
      Handle messages
     */
  const [messages, setMessages] = useState([
    {
      text: "Hello, Travelist Bot here, how can i help you?",
      position: "left",
    }
  ]);





   

  function onSubmitMessage(inputText) {
    setMessages([...messages, { text: inputText, position: "right" }]);
  }

  /*
      Render HTML
    */
  return (
    <div className='mainContainer'>
      
      <div className="app_window">
        <MessageBox messages={messages} />
        <Form onSubmitMessage={onSubmitMessage} />
      </div>
    </div>
  );
}

export default App;
