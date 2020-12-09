import { actionsType } from 'actions/actions';

/**
 * @function guessedWordsReducer
 * @param {array} state
 * @param {object} action
 */
export function guessedWordsReducer(state = [], { type, payload }) {
	switch (type) {
		case actionsType.GUESS_WORD:
			return [...state, payload];
		default:
			return state;
	}
}
