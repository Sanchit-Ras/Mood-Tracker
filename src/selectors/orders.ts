import { createSelector } from "reselect";
import type { Product } from "../models/Product";
import type { State } from "../store"
import { productsMapSelector } from "./products";
//top level selector
export function orderStateSelector(State:State){
    return State.orders;
}
export const ordersLoadingSelector=createSelector(orderStateSelector,(orderState)=>orderState.loading);

export const ordersMapSelector=createSelector(orderStateSelector,(orderState)=>orderState.orders)//Data stored as-> orders against order_ids -{1:{id:1,total_product:5,...}}

//Order data in state is stored in Normalized form but component order list need a normal array of orders.
export const ordersLoadedSelector =createSelector(ordersMapSelector,(normalizedOrders=>{
    return Object.keys(normalizedOrders).map((orderId)=>(normalizedOrders[+orderId]));
}))

export const orderProductSelector=createSelector(ordersMapSelector,productsMapSelector,(ordersMap,productsMap)=>{
    return Object.keys(ordersMap).reduce<{[orderId:number]:Product[]}>((prev,currentOrderId)=>{
        const order=ordersMap[+currentOrderId];
        const productsArr=order.products.map((pid)=>productsMap[pid]);
        return {...prev,[currentOrderId]:productsArr};
    },{})
})
   

//creatSelectore() -> for optimizing selectors it calls the selectors given to it and if their output has'nt changed then it will not call its recipe function.
//hence, optimized
//since recipe function is a pure function its output only depends on the input -> if there is no change in the input then the output will not change either.
