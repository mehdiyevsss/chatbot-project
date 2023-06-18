import './Message.css'

function Messages(props) {
  return (
    <li className={"message " + props.position}>
      {props.text}
    </li>
  );
}

export { Messages };
