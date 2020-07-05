import * as HomeTypes from './types';

// const fetchLikes = (endpoint: string) => ({
//    [FETCH_DATA]: {
//       types: [FETCH_LIKES_REQUEST, FETCH_LIKES_SUCCESS, FETCH_LIKES_FAILURE]
//    },
//    endpoint: endpoint,
//    schema: productSchema
// });

export const loadLikes = (): HomeTypes.FetchLikesRequestAction => ({
   type: HomeTypes.FETCH_LIKES_REQUEST
});
