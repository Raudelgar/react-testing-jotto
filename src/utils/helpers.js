/**
 * Helper function to find how many characters are in common between
 * the user's input and the secret API word
 * @function getLetterMatchCount
 * @param {string} word - Inpput string by the user
 * @param {string} secret - Secret word from API
 * @returns {number}
 */
export const getLetterMatchCount = (word, secret) => {
	if (!word.trim()) {
		return 0;
	}
	const secretSet = new Set(secret.toLowerCase());
	const wordSet = new Set(word.toLowerCase());
	return [...secretSet].filter((ch) => wordSet.has(ch)).length;
};
