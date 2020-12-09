import {storeFactory} from 'setupTests';
import {guessWord} from 'actions/actions';

describe('Integration > guessword action dispatcher',() => {
  const secretWord = 'party';
  const unsuccessWord = 'train';
  describe('no guessed word',() => {
    let mockStore;
    beforeEach(() => {
      mockStore = storeFactory({
        success: false,
        guessedWords: [],
        secretWord,
      })
    });

    it('should udate state correctly for unsuccessful guess',() => {
      const expectedState = {
        success: false,
        guessedWords: [{
          guessWord:unsuccessWord,
          letterMatchCount:3,
        }],
        secretWord,
      }
      mockStore.dispatch(guessWord(unsuccessWord))
      expect(mockStore.getState()).toEqual(expectedState);
    })
    it('should udate state correctly for successful guess',() => {
      const expectedState = {
        success: true,
        guessedWords: [{
          guessWord:secretWord,
          letterMatchCount:5,
        }],
        secretWord,
      }
      mockStore.dispatch(guessWord(secretWord))
      expect(mockStore.getState()).toEqual(expectedState);
    })
  })
  describe('some guessed word',() => {
    let mockStore;
    const guessedWordsArr = [
      {
        guessWord:'part',
        letterMatchCount:4,
      }
    ]
    beforeEach(() => {
      mockStore = storeFactory({
        success: false,
        guessedWords: [...guessedWordsArr],
        secretWord,
      })
    });
    it('should udate state correctly for unsuccessful guess',() => {
      const expectedState = {
        success: false,
        guessedWords: [...guessedWordsArr,{
          guessWord:unsuccessWord,
          letterMatchCount:3,
        }],
        secretWord,
      }
      mockStore.dispatch(guessWord(unsuccessWord))
      expect(mockStore.getState()).toEqual(expectedState);
    })
    it('should udate state correctly for successful guess',() => {
      const expectedState = {
        success: true,
        guessedWords: [...guessedWordsArr,{
          guessWord:secretWord,
          letterMatchCount:5,
        }],
        secretWord,
      }
      mockStore.dispatch(guessWord(secretWord))
      expect(mockStore.getState()).toEqual(expectedState);
    })
  })
})