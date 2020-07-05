import { combineReducers } from 'redux';
import entityReducer from './entity';
import pageReducer from './pages';

export const rootReducer = combineReducers({
   entityReducer,
   pageReducer
});

export default rootReducer;
