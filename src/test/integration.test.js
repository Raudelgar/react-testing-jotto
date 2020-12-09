import { storeFactory } from 'setupTests';
import ReduxThunk from 'redux-thunk';
import { guessWord } from 'actions/actions';

// const middlerware = [ReduxThunk];

describe('guessWord action dispatcher', () => {
	const secretWord = 'party';
	const unsuccessfulGuess = 'train';
	describe('no guess words', () => {
		const initialState = { secretWord };
		let store;
		beforeEach(() => {
			store = storeFactory(initialState);
		});
		test('update state correctly for unsuccessful guess', () => {
			store.dispatch(guessWord(unsuccessfulGuess));
			const actualStore = store.getState();
			const expectedStore = {
				...initialState,
				success: false,
				guessedWords: [
					{
						guessWord: unsuccessfulGuess,
						letterMatchCount: 3,
					},
				],
			};
			expect(actualStore).toEqual(expectedStore);
		});
		test('update state correctly for successful guess', () => {
			store.dispatch(guessWord(secretWord));
			const actualStore = store.getState();
			const expectedStore = {
				...initialState,
				success: true,
				guessedWords: [
					{
						guessWord: secretWord,
						letterMatchCount: 5,
					},
				],
			};
			expect(actualStore).toEqual(expectedStore);
		});
	});
	describe('some guess words', () => {
		const guessedWords = [{ guessWord: 'agile', letterMatchCount: 1 }];
		const initialState = { secretWord, guessedWords };
		let store;
		beforeEach(() => {
			store = storeFactory(initialState);
		});
		test('update state correctly for unsuccessful guess', () => {
			store.dispatch(guessWord(unsuccessfulGuess));
			const actualStore = store.getState();
			const expectedStore = {
				...initialState,
				success: false,
				guessedWords: [
					...guessedWords,
					{
						guessWord: unsuccessfulGuess,
						letterMatchCount: 3,
					},
				],
			};
			expect(actualStore).toEqual(expectedStore);
		});
		test('update state correctly for successful guess', () => {
			store.dispatch(guessWord(secretWord));
			const actualStore = store.getState();
			const expectedStore = {
				...initialState,
				success: true,
				guessedWords: [
					...guessedWords,
					{
						guessWord: secretWord,
						letterMatchCount: 5,
					},
				],
			};
			expect(actualStore).toEqual(expectedStore);
		});
	});
});
