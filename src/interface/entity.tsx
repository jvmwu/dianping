export interface IComment {}

export interface IOrder {}

export interface IProduct {}

export interface IShop {}

export interface ISchema {
   id: string;
   name: string;
}

//经过中间件处理的action所具有的标识
export const FETCH_DATA = 'FETCH DATA';
export interface IFetchMiddleware {
   [FETCH_DATA]: {
      types: string[];
   };
   endpoint: string;
   schema: ISchema;
}
