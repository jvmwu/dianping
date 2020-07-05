import { IOrder } from '../../../../interface/entity';
import * as OrderTypes from './types';

export const addOrder = (data: IOrder): OrderTypes.AddOrderAction => ({
   type: OrderTypes.ADD_ORDER,
   order: data
});
