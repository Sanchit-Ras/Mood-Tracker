import { createSelector } from "reselect";
import type { State } from "../store"
export function productStateSelector(State:State){
    return State.products;
}
export const productLoadingSelector=createSelector(productStateSelector,(productState)=>productState.loading)
export const productsMapSelector=createSelector(productStateSelector,(productState)=>productState.products)
export const productSelector=createSelector(productStateSelector,(productState)=>{
    const normalizedProducts=productState.products;
    return Object.keys(normalizedProducts).map((pid)=>normalizedProducts[+pid]);
})//State has products in normalized fomat so use map to make an array