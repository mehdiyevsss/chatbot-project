import './Input.css'

const Input = (props) => {
  return (
    <input
      className="message_input"
      value={props.value}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
      placeholder="Type your message here..."
    />
  );
}
export default Input;