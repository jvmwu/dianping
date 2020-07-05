import { IShop } from '../../../../interface/entity';

export const ADD_SHOP = '[SHOP] ADD_SHOP';

export interface AddShopAction {
   type: typeof ADD_SHOP;
   order: IShop;
}

export type ShopActionTypes = AddShopAction;
