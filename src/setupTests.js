// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import 'jest-enzyme';
import { render} from '@testing-library/react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types';
import configureStore from 'redux-mock-store';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers/rootReducer';
import { middleware } from 'redux/configureStore';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });

/**
 * Helper function to find elements by the data-test attriute
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper
 * @param {String} val
 */
export const findByTestAttr = (wrapper, val) =>
	wrapper.find(`[data-testid='${val}']`);

/**
 * Helper function to test prop-types
 * @function checkProps
 * @param {React Component} component
 * @param {object} expectedProps
 */
export const checkProps = (component, expectedProps) => {
	const propError = checkPropTypes(
		component.propTypes,
		expectedProps,
		'prop',
		component.name
	);
	expect(propError).toBeUndefined();
};

/**
 * Helper function to mock Redux Store
 * @function mockReduxStore
 * @param {array} middleware
 * @param {object} mockStore
 */
export const mockReduxStore = ( mockStore = {}) =>
	configureStore(middleware)(mockStore);

/**
 * Helper function to mock Provider
 * @function renderMock
 * @param {node} ui
 * @param {object} initialState
 */
export const renderMock = (ui, intialState = {}) => {
	const store = createStore(rootReducer, intialState, applyMiddleware(thunk));
	const ReduxProvider = ({children}) => <Provider store={store}>{children}</Provider>
	return render(ui, {wrapper: ReduxProvider})
}

//This setup  is for Class Components connect to redux
export const storeFactory = (initialState) => {
	const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
	return createStoreWithMiddleware(rootReducer, initialState);
};
