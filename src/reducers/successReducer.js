import { actionsType } from 'actions/actions';

/**
 * @function successReducer
 * @param {boolean} state
 * @param {object} action
 */
export function successReducer(state = false, { type, payload }) {
	switch (type) {
		case actionsType.CORRECT_GUESS:
			return true;
		default:
			return state;
	}
}
