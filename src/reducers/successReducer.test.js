import { successReducer } from './successReducer';
import { actionsType } from 'actions/actions';

describe('reducers > successReducer', () => {
	it('should return default state of `false` when no action is match', () => {
		expect(successReducer(undefined, {})).toBe(false);
	});
	it('should return state of `true` when match action is passed', () => {
		expect(successReducer(undefined, { type: actionsType.CORRECT_GUESS })).toBe(
			true
		);
	});
});
