import { IProduct } from '../../../../interface/entity';

export const ADD_PRODUCT = '[PRODUCT] ADD_PRODUCT';

export interface AddProductAction {
   type: typeof ADD_PRODUCT;
   order: IProduct;
}

export type ProductActionTypes = AddProductAction;
