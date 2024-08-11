import './Text-paragraph.css';

function TextParagraph({ className,  paragraphText }){
	return (
		<p className={`paragraph ${ className }`}>{ paragraphText }</p>
	);
}

export default TextParagraph;