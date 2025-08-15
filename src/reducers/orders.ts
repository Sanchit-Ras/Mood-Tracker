import type { AnyAction } from "redux";
import {} from "../actions";
import type { Order } from "../models/Order";
import { LOAD_ORDERS, ORDER_DETAIL_LOADED, ORDERS_LOADED } from "../actions/orders";
import { produce } from "immer";
import { normalize, schema } from "normalizr";
type NormalizedOrders={
    [x:number]:Order
}
export type State={
    loading:boolean;
    orders:{[x:number]:Order}
}
export const InitialState={
    loading:false,
    orders:{}
}
function orderReducer(state:State=InitialState,action:AnyAction){
    switch(action.type){
        case LOAD_ORDERS:
            return produce(state,(draft)=>{
                draft.loading=true;
            })
        case ORDERS_LOADED:
            return produce(state,(draft)=>{
                draft.loading=false;
                const productEntity=new schema.Entity("products");
                const ordersEntity=new schema.Entity("orders",{
                    products:[productEntity]
                });
                const ordersArr=action.payload;
                const normalizedOrders=normalize(ordersArr,[ordersEntity])
                draft.orders=normalizedOrders.entities.orders!;
            })
        case ORDER_DETAIL_LOADED:
            return produce(state,(draft)=>{
                const productEntity=new schema.Entity("products");
                const orderEntity=new schema.Entity("orders",{
                    products:[productEntity]
                });
                const order=action.payload;
                const normalizedOrder=normalize(order,orderEntity);
                draft.orders[action.payload.id]=normalizedOrder.entities.orders![action.payload.id];
            })
        default:
            return state;
    }
    
}
export default orderReducer;
//if the type of every order is Order then how come we are able to store products array also. I mean why typescript is not giving error