import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from 'reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const middleware = [reduxThunk];
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middleware))(createStore);
export default createStoreWithMiddleware(rootReducer);
