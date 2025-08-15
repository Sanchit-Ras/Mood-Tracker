import { memo, useEffect, type FC } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Loading from './Loading';
import type { Order } from './models/Order';
import type { Product } from './models/Product';


//we are trying to make this component dumb in video 92 because -
//The component becomes Reusable, Easy Unit Testing, can be used across other projects


export type OrderDetailProps = {
  order:Order;
  products:Product[];
  orderDetailAction:(order:Order)=>void;
  orderId:number
}
const OrderDetail: FC<OrderDetailProps> = ({order,products,orderDetailAction,orderId}) => {
  
  // const params = useParams(); -> replaced by withRouter HOC
  // const orderId = +params.orderId!;

  // const orderMap = useSelector(ordersMapSelector);
  // const productsMap=useSelector(orderProductSelector);//{1:[{product1},{product2},{product3}]} -> shows how Products in order id = 1 are stored
  
  
  // const order = orderMap[orderId];->replaced by props
  // const products=productsMap[orderId];
  
  
  // const dispatch = useDispatch();->replaced by mapDispatchToProps
  
  
  useEffect(() => {

    axios.get("https://dummyjson.com/carts/" + orderId).then((response) => {
      console.log(response.data);
      orderDetailAction(response.data)
    })
  }, [orderId])
  if (!order) {
    return <Loading />
  }
  return (
    <div className='bg-amber-200'>
      <h3 className='text-xl font-bold bg-gray-300 p-4'>This is Order: {order.id}</h3>
      <p className='font-semibold p-4'>Total Products: {order.totalProducts}</p>
      <div>
        {products.map((prod)=>{
          return <p key={prod.id} className='font-medium bg-cyan-400 p-2 rounded-md m-1'>Product Title: {prod.title}</p>
        })}
      </div>
    </div>
  );
}

export default memo(OrderDetail);