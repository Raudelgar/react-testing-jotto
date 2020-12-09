import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from 'setupTests';
import GuessWords from './GuessWords';

describe('GuessWords Component', () => {
	let wrapper;
	const defaultProps = {
		guessedWords: [],
	};
	beforeEach(() => {
		wrapper = (props = defaultProps) => shallow(<GuessWords {...props} />);
	});
	it('should render without crashing', () => {
		expect(wrapper().length).toBe(1);
	});
	it('should not throw a warning with expected props', () => {
		checkProps(GuessWords, defaultProps);
	});
	describe('GuessWords > Instructions', () => {
		it('should render Instructions on mount', () => {
			//Mounts with default Props
			const instructionsSpan = findByTestAttr(
				wrapper(),
				'component-guess-instructions'
			);
			expect(instructionsSpan.text().length).not.toBe(0);
		});
	});
	describe('GuessWords > Table Section', () => {
		const props = {
			guessedWords: [
				{
					guessWord: 'train',
					letterMatchCount: 3,
				},
				{
					guessWord: 'agile',
					letterMatchCount: 1,
				},
				{
					guessWord: 'party',
					letterMatchCount: 5,
				},
			],
		};
		it('should render a guess word section on guessWords prop not empty', () => {
			const guessWordSection = findByTestAttr(
				wrapper(props),
				'component-guess-section'
			);
			expect(guessWordSection.length).toBe(1);
		});
		it('should render a DIV for each item in guessWords prop', () => {
			const guessWordSectionItem = findByTestAttr(
				wrapper(props),
				'component-guess-section-item'
			);
			expect(guessWordSectionItem.length).toBe(props.guessedWords.length);
		});
		it('should display a title on guess word section', () => {
			const guessWordSectionTitle = findByTestAttr(
				wrapper(props),
				'component-guess-section-title'
			);
			expect(guessWordSectionTitle.text().length).not.toBe(0);
		});
	});
});
