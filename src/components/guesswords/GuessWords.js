import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';

/**
 * Functional Component for render a Table with all user's guess words and matching letters
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component (or null if guesswords prop is not thruthy)
 */
const GuessWords = ({ guessedWords = [] }) => {
	let content;
	if (!guessedWords.length) {
		content = (
			<span data-testid='component-guess-instructions'>
				Try to guess the secret word!
			</span>
		);
	} else {
		const guessWordsRow = guessedWords.map((word, index) => (
			<tr key={index} data-testid='component-guess-section-item'>
				<td className='trText'>{word.guessWord}</td>
				<td className='trText'>{word.letterMatchCount}</td>
			</tr>
		));
		content = (
			<div data-testid='component-guess-section'>
				<h3 data-testid='component-guess-section-title'>Guessed Words</h3>
				<table className='table table-sm'>
					<thead className='thead-light'>
						<tr>
							<th scope='col'>Guess</th>
							<th scope='col'>Matching Letters</th>
						</tr>
					</thead>
					<tbody className='hover'>{guessWordsRow}</tbody>
				</table>
			</div>
		);
	}

	return <div>{content}</div>;
};

GuessWords.propTypes = {
	guessedWords: PropTypes.arrayOf(
		PropTypes.shape({
			guessWord: PropTypes.string.isRequired,
			letterMatchCount: PropTypes.number.isRequired,
		})
	),
};

export default GuessWords;
