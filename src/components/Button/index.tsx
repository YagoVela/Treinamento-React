import './style.css';
import { IButton } from '../../Interface/IButton';

function Button({label, ...props} : IButton) {
  return (
    <>
      <button className="button" {...props}>{label}</button>
    </>
  )
}

export default Button
