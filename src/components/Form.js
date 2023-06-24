import React, { useState } from "react";
import './Form.css'
import Input from "./Input";
import Button from "./Button";

function Form(props) {
  /* Handle input text */
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    setInputText(e.target.value);
  }

  function listenEnter(e) {
    if (e.key === "Enter") handleSubmit();
  }

  function handleSubmit() {
    props.onSubmitMessage(inputText);
    setInputText("");
  }

  return (
    <div className="form">   
       <Input value={inputText} onChange={handleChange} onKeyDown={listenEnter} />
       <Button onClick={handleSubmit} />
    </div>
  );
}

export default Form;
