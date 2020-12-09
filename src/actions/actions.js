import axios from 'axios';
import { getLetterMatchCount } from 'utils/helpers';

export const actionsType = {
	CORRECT_GUESS: 'CORRECT_GUESS',
	GUESS_WORD: 'GUESS_WORD',
	SET_SECRET_WORD: 'SET_SECRET_WORD',
};

/**
 * @function correctGuess
 * @returns {object}
 */
export function correctGuess() {
	return {
		type: actionsType.CORRECT_GUESS,
	};
}

/**
 * @function guessWord
 * @returns {object}
 */
export function guessWord(guessWord) {
	return (dispatch, getState) => {
		const { secretWord } = getState();
		const letterMatchCount = getLetterMatchCount(guessWord, secretWord);
		dispatch({
			type: actionsType.GUESS_WORD,
			payload: {
				guessWord,
				letterMatchCount,
			},
		});
		if (secretWord.toLowerCase() === guessWord.toLowerCase()) {
			dispatch({
				type: actionsType.CORRECT_GUESS,
			});
		}
	};
}

/**
 * @function getSecretWord
 * @returns {string}
 */
export function getSecretWord() {
	return (dispatch) => {
		return axios
			.get('http://localhost:3030')
			.then((res) =>
				dispatch({ type: actionsType.SET_SECRET_WORD, payload: res.data })
			);
	};
}
