import { actionsType } from 'actions/actions';

/**
 * @function guessedWordsReducer
 * @param {string} state
 * @param {object} action
 */
export function secretWordReducer(state = null, { type, payload }) {
	switch (type) {
		case actionsType.SET_SECRET_WORD:
			return payload;
		default:
			return state;
	}
}
