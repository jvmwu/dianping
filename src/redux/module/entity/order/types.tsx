import { IOrder } from '../../../../interface/entity';

export const ADD_ORDER = '[ORDER] ADD_ORDER';

export interface AddOrderAction {
   type: typeof ADD_ORDER;
   order: IOrder;
}

export type OrderActionTypes = AddOrderAction;
