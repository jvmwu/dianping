//获取猜你喜欢请求
export const FETCH_LIKES_REQUEST = '[Home] FETCH_LIKES_REQUEST';
//获取猜你喜欢请求成功
export const FETCH_LIKES_SUCCESS = '[Home] FETCH_LIKES_SUCCESS';
//获取猜你喜欢请求失败
export const FETCH_LIKES_FAILURE = '[Home] FETCH_LIKES_FAILURE';

export interface FetchLikesRequestAction {
   type: typeof FETCH_LIKES_REQUEST;
}

export interface FetchLikesSuccessAction {
   type: typeof FETCH_LIKES_SUCCESS;
}

export interface FetchLikesFailureAction {
   type: typeof FETCH_LIKES_FAILURE;
}

export type HomeActionTypes = FetchLikesRequestAction | FetchLikesSuccessAction | FetchLikesFailureAction;
