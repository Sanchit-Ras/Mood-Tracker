import {useEffect, type FC} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadOrdersAction, ordersLoadedAction } from './actions/orders';
import { ordersLoadedSelector, ordersLoadingSelector } from './selectors/orders';
import axios from 'axios';
import Loading from './Loading';
import { Link } from 'react-router';
type OrdersListProps ={}
const OrdersList:FC<OrdersListProps>=()=>{
    const loading=useSelector(ordersLoadingSelector);
    const orders=useSelector(ordersLoadedSelector);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(loadOrdersAction());
        axios.get('https://dummyjson.com/carts').then((response)=>{
            dispatch(ordersLoadedAction(response.data.carts))
        })
    },[])
    if(loading){
        return <Loading/>
    }

    return(
        <div>
            {orders.map((order)=>{
                return(
                    <div key={order.id} className='bg-amber-500 p-2'>
                        <Link to={"/order/"+order.id} className='font-bold text-lg'>ORDER_ID - {order.id} </Link>
                        <div className='text-white font-semibold'>Total Quantity - {order.totalQuantity}</div>
                    </div>
                )
            })}
        </div>
    );
}
export default OrdersList;