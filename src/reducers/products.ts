import type { AnyAction } from "redux";
import {} from "../actions/mood-actions";
import type { Product } from "../models/Product";
import { LOAD_PRODUCTS, PRODUCTS_LOADED } from "../actions/product";
import { produce } from "immer";
import { ORDER_DETAIL_LOADED, ORDERS_LOADED } from "../actions/orders";
import type { Order } from "../models/Order";
import { normalize, schema } from "normalizr";
type NormalizedProducts={[x:number]:Product}
export type State={
    loading:boolean,
    products:NormalizedProducts,
}
export const InitialState={
    loading:false,
    products:{},
}
function productsReducer(state:State=InitialState,action:AnyAction){
    switch(action.type){
        case LOAD_PRODUCTS:
           return produce(state,(draft)=>{
                draft.loading=true;
            })
        case PRODUCTS_LOADED:
           return produce(state,(draft)=>{
                const products=action.payload;
                const productEntity=new schema.Entity("products");

                const normalizedProducts=normalize(products,[productEntity])
                draft.products=normalizedProducts;
                draft.loading=false;
            })
        case ORDERS_LOADED:
            return produce(state,(draft)=>{
                const orders=action.payload;
                const products=orders.reduce((prev:Product[],curr:any)=>{
                    return [...prev,...curr.products]
                },[])
               const normalizedProducts=products.reduce((prev:NormalizedProducts,curr:Product)=>{
                    return {...prev,[curr.id]:curr}
                },{})
                draft.products=normalizedProducts;
            })
        case ORDER_DETAIL_LOADED:
             return produce(state,(draft)=>{
                const order=action.payload;
                const productEntity=new schema.Entity("products");
                const normalizedProducts=normalize(order.products,[productEntity]);
                draft.products={...draft.products,...normalizedProducts.entities.products};
            })

        default:
            return state;
    }
    
}
export default productsReducer;