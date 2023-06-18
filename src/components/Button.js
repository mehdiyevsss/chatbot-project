import './Button.css';

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      &#11014;
    </button>
  );
}

export default Button;