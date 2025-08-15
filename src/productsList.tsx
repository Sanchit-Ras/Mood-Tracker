import { useDispatch, useSelector } from "react-redux";
import { productLoadingSelector, productSelector } from "./selectors/products";
import { useEffect } from "react";
import { laodProductsAction, productsLoadedAction } from "./actions/product";
import Loading from "./Loading";
import ProductComponent from "./ProductComponent";
import axios from "axios";

export default function ProductsList(){
    const loading=useSelector(productLoadingSelector);
    const products=useSelector(productSelector);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(laodProductsAction());
        axios.get("https://myeasykart.codeyogi.io/products").then((response)=>{
            dispatch(productsLoadedAction(response.data.data))
        })
    },[])

    if(loading){
        return <Loading/>
    }
    return(
        <div className="flex flex-wrap md:grid grid-cols-3 gap-y-5">
            {products.map((product)=>{
                return <ProductComponent key={product.id} {...product}/>
            })}
        </div>
    )
}