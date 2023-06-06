import './Input.css'

const Input=(props)=>{
     return (
       <div className='salam'>
         <input
           className="message_input"
           value={props.value}
           onChange={props.onChange}
           placeholder="Type your message here..."
         />
       </div>
     );
    
}
export default Input;