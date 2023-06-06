import './Messages.css'


function Messages(props) {
  return (
    <li className={"message appeared " + props.position}>
      
      <div className="text_wrapper">
        <div className="text">{props.text}</div>
      </div>
    </li>
  );
}

export { Messages };
