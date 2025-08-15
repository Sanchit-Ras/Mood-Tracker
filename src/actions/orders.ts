import type { Order } from "../models/Order";
import type { ActionCreator } from "./index";

export const LOAD_ORDERS="LOAD_ORDERS";

export const loadOrdersAction:ActionCreator=()=>({
    type:LOAD_ORDERS,
    payload:undefined
})

export const ORDERS_LOADED="ORDERS_LOADED";

export const ordersLoadedAction:ActionCreator<any[]>=(orders:any[])=>({
    type:ORDERS_LOADED,
    payload:orders
})

export const ORDER_DETAIL_LOADED="ORDER_DETAIL_LOADED";

export const orderDetailAction:ActionCreator<Order>=(order:Order)=>({
    type:ORDER_DETAIL_LOADED,
    payload:order
})