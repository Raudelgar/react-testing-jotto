import { render, screen, waitFor, act } from '@testing-library/react';
import { useSelector, useDispatch  } from 'react-redux';
import axios from 'axios';
import {renderMock} from 'setupTests';
import App from './App';

jest.mock('axios');
jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: jest.fn(() => {})
}));

describe('App Component', () => {
	beforeEach(() => {
		useSelector.mockImplementationOnce((cb) => cb({success:false,guessedWords:[],secretWord:null}));
		useDispatch.mockReturnValue(jest.fn());
		renderMock(<App />);
	})

	it('renders without crashing', () => {
		expect(screen.getByTestId('jotto-app')).toBeInTheDocument();
	});
	describe('App > No guessed word', () => {
		it('should have the instructions', () => {
			expect(screen.getByTestId('component-guess-instructions')).toBeInTheDocument();
		})
		it('should have the Input Component', () => {
			expect(screen.getByTestId('component-input')).toBeInTheDocument();
		})
		it('should fetch the `secretWord` on mount', async () => {
			// axios.get.mockImplementationOnce(() => Promise.resolve({data: 'party'}));
			// axios.get.mockResolvedValue({data: 'party'});
			const dispatch = useDispatch();	
			// await act(async () => {
			// 	// screen.debug();
			// 	// expect(dispatch).toHaveBeenCalledTimes(1);
			// });
			expect(dispatch).toHaveBeenCalledTimes(1);
		})
	})
});
