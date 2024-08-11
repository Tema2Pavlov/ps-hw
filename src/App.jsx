import './App.css';
import './styles/spaces.css';
import './styles/typography.css';
import Button from './components/Button/Button';
import TextParagraph from './components/Text-paragraph/Text-paragraph';
import Title from './components/Title/Title';

const searchText = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.';

function App() {
	return (
		<>
			<div className="wrapper">
				<div className="search-block">
					<Title titleText={'Поиск'}></Title>
					<TextParagraph className="txt-medium-16-24 mt-16" paragraphText={searchText}></TextParagraph>
					<Button className="txt-medium-16-24 mt-24" buttonText={'Искать'}></Button>
				</div>
			</div>
		</>
	);
}

export default App;
