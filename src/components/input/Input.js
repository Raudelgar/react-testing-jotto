import { guessWord } from 'actions/actions';
import { useSelector, useDispatch } from 'react-redux';
/**
 * Function component for user's input guess word
 * @function Input
 * @returns {JSX}
 */
const Input = () => {
	const success = useSelector((store) => store.success);
	const dispatch = useDispatch();
	const handleSubmit = () => {
		dispatch(guessWord())
	};
	if (!success) {
		return (
			<div data-testid='component-input'>
				<form
					data-testid='input-form'
					className='form-inline'
					onSubmit={handleSubmit}
				>
					<input
						type='text'
						data-testid='input-box'
						className='m-2 mx-sm-3'
						placeholder='Enter Guess'
					/>
					<button
						data-testid='submit-btn'
						className='btn btn-primary m-2'
						type='submit'
					>
						Submit
					</button>
				</form>
			</div>
		);
	}

	return null;
};

export default Input;
