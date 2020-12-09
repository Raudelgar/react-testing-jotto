import moxios from 'moxios';
import { actionsType, correctGuess, getSecretWord } from './actions';
import { storeFactory } from 'setupTests';

describe('actions > correctGuess', () => {
	it('should return an object with type prop', () => {
		expect(correctGuess()).toEqual({ type: actionsType.CORRECT_GUESS });
	});
});

describe('actions > getSecretWord', () => {
	beforeEach(() => {
		moxios.install();
	});
	afterEach(() => {
		moxios.uninstall();
	});
	it('should add response word to state', async () => {
		const secretWord = 'party';
		const store = storeFactory();

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: secretWord,
			});
		});
		// return store.dispatch(getSecretWord()).then(() => {
		// 	const newState = store.getState();
		// 	expect(newState.secretWord).toBe(secretWord);
		// });
		await store.dispatch(getSecretWord());
		const newState = store.getState();
		expect(newState.secretWord).toBe(secretWord);
	});
});
