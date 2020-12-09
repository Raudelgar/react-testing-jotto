import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from 'setupTests';
import Congrats from './Congrats';

describe('Congrats Component', () => {
	let wrapper;
	const defaultProps = {
		success: false,
	};
	beforeEach(() => {
		wrapper = (props = defaultProps) => shallow(<Congrats {...props} />);
	});
	it('render without crashing', () => {
		wrapper();
	});
	it('should render null if success prop is false', () => {
		expect(wrapper({ success: false })).toBeEmptyRender();
	});
	it('should render congrats element on success prop true', () => {
		const congratsElement = findByTestAttr(
			wrapper({ success: true }),
			'component-congrats'
		);
		expect(congratsElement.length).toBe(1);
	});
	it('should not throw a warning with expected props', () => {
		const expectedProps = {
			success: false,
		};
		checkProps(Congrats, expectedProps);
	});
});
