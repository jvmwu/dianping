import { IProduct } from '../../../../interface/entity';
import * as ProductTypes from './types';

export const addProduct = (data: IProduct): ProductTypes.AddProductAction => ({
   type: ProductTypes.ADD_PRODUCT,
   order: data
});
