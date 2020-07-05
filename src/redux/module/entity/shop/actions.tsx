import { IShop } from '../../../../interface/entity';
import * as ShopTypes from './types';

export const addShop = (data: IShop): ShopTypes.AddShopAction => ({
   type: ShopTypes.ADD_SHOP,
   order: data
});
