import './Button.css';

function Button({ className, buttonText }) {
	return (
		<button className={`button ${ className }`}>{ buttonText }</button>
	);
}

export default Button;