import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from 'setupTests';
import InputComponent from './InputComponent';

let wrapper;
beforeEach(() => {
	const mockStore = storeFactory({});
	wrapper = shallow(<InputComponent store={mockStore} />)
		.dive()
		.dive();
});
describe('Input Class Component', () => {
	describe('word has not been guessed', () => {
		it('should render component without error', () => {});
		it('should render input box', () => {});
		it('should render submit botton', () => {});
	});
	describe('word has been guessed', () => {
		it('should render component without error', () => {});
		it('should not render input box', () => {});
		it('should not render submit botton', () => {});
	});
});
