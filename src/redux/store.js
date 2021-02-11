import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancer = composeWithDevTools;

const store = createStore(
    rootReducer, 
    composeEnhancer(applyMiddleware(thunk))
);

export default store;