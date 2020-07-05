import { combineReducers } from 'redux';
import CommentReducer from './comment/reducer';
import OrderReducer from './order/reducer';
import ProductReducer from './product/reducer';
import ShopReducer from './shop/reducer';

export const entityReducer = combineReducers({
   CommentReducer,
   OrderReducer,
   ProductReducer,
   ShopReducer
});

export default entityReducer;
