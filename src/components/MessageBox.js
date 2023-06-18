import React, { useEffect, useRef } from "react";
import './MessageBox.css'
import { Messages } from "./Message";

function MessageBox(props) {
  /* Autoscrolling */
  const messagesEndRef = useRef(null);

  useEffect(() => {
    //scroll to bottom when a message is sent or received
    if (props.messages.length > 1) {
      scrollToBottom();
    }
  });

  function scrollToBottom() {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <ul className="messages">
      {props.messages.map((item) => (
        <Messages text={item.text} position={item.position} />
      ))}
      <li ref={messagesEndRef} />
    </ul>
  );
}

export default MessageBox;
