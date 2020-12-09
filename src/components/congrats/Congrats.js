import PropTypes from 'prop-types';

/**
 * Functional Component for render a Congrats Messages
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component (or null if success prop is not thruthy)
 */
const Congrats = ({ success }) => {
	if (!success) {
		return null;
	}
	return (
		<div data-testid='component-congrats' className='alert alert-success'>
			<span>Congratulations! You guessed the word!</span>
		</div>
	);
};

Congrats.propTypes = {
	success: PropTypes.bool.isRequired,
};

export default Congrats;
