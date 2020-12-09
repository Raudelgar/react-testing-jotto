import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import reduxThunk from 'redux-thunk';
import Input from './Input';
import { actionsType, guessWord } from 'actions/actions';

jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: jest.fn(() => {})
}));

describe('Input Component', () => {
	describe('Input Component on `success false`', () => {
		beforeEach(() => {
			useSelector.mockImplementationOnce((cb) => cb({ success: false }));
			render(<Input />);
		});
		it('should render input component on initial state', () => {
			expect(screen.getByTestId('component-input')).toBeInTheDocument();
		});
		it('should render input box on initial state', () => {
			expect(screen.getByTestId('input-box')).toBeInTheDocument();
		});
		it('should render submit button on initial state', () => {
			expect(screen.getByTestId('submit-btn')).toBeInTheDocument();
		});
	});
	describe('Input Component on `success true`', () => {
		beforeEach(() => {
			useSelector.mockImplementationOnce((cb) => cb({ success: true }));
		});
		it('should not render input component on success redux state `true`', () => {
			const { container } = render(<Input />);
			expect(container.firstChild).toBeNull();
		});
	});
	describe('Redux Props', () => {
		beforeEach(() => {
			useSelector.mockImplementationOnce((cb) => cb({ success: false }));
			useDispatch.mockReturnValue(jest.fn());
		});
		it('should dispatch action on Submit button click', () => {
			render(<Input />);
			const dispatch = useDispatch();	

			fireEvent.submit(screen.getByTestId('input-form'));

			expect(dispatch).toHaveBeenCalled();
		});
	});
});
