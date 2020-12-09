import { getLetterMatchCount } from './helpers';

describe('utils > helpers functions', () => {
	describe('helpers > getLetterMatchCount', () => {
		const secret = 'party';
		it('it should return 3 if word is train and secret is party', () => {
			const expectedValue = 3;
			const actualValue = getLetterMatchCount('train', secret);
			expect(actualValue).toBe(expectedValue);
		});
		it('it should return zero if word is link and secret is party', () => {
			const expectedValue = 0;
			const actualValue = getLetterMatchCount('link', secret);
			expect(actualValue).toBe(expectedValue);
		});
		it('should return zero if word is empty string', () => {
			const expectedValue = 0;
			const actualValue = getLetterMatchCount(' ', secret);
			expect(actualValue).toBe(expectedValue);
		});
		it('should return distinc count on duplicate letters', () => {
			const expectedValue = 1;
			const actualValue = getLetterMatchCount('abba', secret);
			expect(actualValue).toBe(expectedValue);
		});
		it('should return correct match case-insesitive', () => {
			const expectedValue = 5;
			const actualValue = getLetterMatchCount('Party', secret);
			expect(actualValue).toBe(expectedValue);
		});
	});
});
