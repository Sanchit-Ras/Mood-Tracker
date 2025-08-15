import type { Product } from "./models/Product";

export default function ProductComponent(data:Product){
  return (
    <div className="md:max-w-80 relative p-2 w-full">
      <img className="w-full aspect-square bg-gradient-to-tr p-5 from-[#c6c09c] to-white" 
        src="https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp" alt="product"/>
      <p className=" text-lg md:text-sm pb-1 font-medium">{data.title}</p>
      <p className="text-md md:text-xs font-medium inline">${data.price}</p> 
    </div> 
  )
}
