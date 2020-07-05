import { applyMiddleware, createStore, Store, StoreEnhancer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
//import callApiMiddleware from './middleware/api';
import rootReducer from './module';

//const middlewares = [thunk, callApiMiddleware];
const middlewares = [thunk, apiMiddleware];

let store: Store;

type WindowWithDevTools = Window & {
   __REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer<unknown, {}>;
};

const isReduxDevtoolsExtenstionExist = (arg: Window | WindowWithDevTools): arg is WindowWithDevTools => {
   return '__REDUX_DEVTOOLS_EXTENSION__' in arg;
};

if (process.env.NODE_ENV !== 'production' && isReduxDevtoolsExtenstionExist(window)) {
   store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
} else {
   store = createStore(rootReducer, applyMiddleware(...middlewares));
}

export default store;
