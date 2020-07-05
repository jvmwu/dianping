import { FETCH_LIKES_FAILURE, FETCH_LIKES_REQUEST, FETCH_LIKES_SUCCESS, HomeActionTypes } from './types';

const reducer = (state = null, action: HomeActionTypes) => {
   switch (action.type) {
      case FETCH_LIKES_REQUEST:
      //todo
      case FETCH_LIKES_SUCCESS:
      //todo
      case FETCH_LIKES_FAILURE:
      //todo
      default:
         return state;
   }
};

export default reducer;
