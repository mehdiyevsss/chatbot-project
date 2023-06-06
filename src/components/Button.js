import './Button.css';



const Button=(props)=>{
    return (
      <button className="send_message" onClick={props.onClick}>
        &#11014;
      </button>
    );

}

export default Button;