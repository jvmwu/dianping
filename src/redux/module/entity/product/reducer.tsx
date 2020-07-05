import { ProductActionTypes } from './types';
import { ISchema } from '../../../../interface/entity';

export const schema: ISchema = {
   id: 'id',
   name: 'products'
};

const reducer = (state = null, action: ProductActionTypes) => {
   return state;
};

export default reducer;
