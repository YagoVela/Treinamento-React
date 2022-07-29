import './style.css';
import { IInput } from '../../Interface/IInput';


function Input({label, ...props} : IInput) {
  return (
    <>
      <input className="input" placeholder={label} {...props}></input>
    </>
  )
}

export default Input
