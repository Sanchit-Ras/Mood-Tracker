import { connect } from "react-redux";
import { orderDetailAction } from "./actions/orders";
import { orderProductSelector, ordersMapSelector } from "./selectors/orders";
import type { State } from "./store";
import OrderDetail, { type OrderDetailProps } from "./OrderDetail";

//returns an object with keys as props names and data from redux store as value
const mapStateToProps=(state:State,ownProps:Partial<OrderDetailProps>)=>{
    const orderId=ownProps.orderId!;
  return {
    order:ordersMapSelector(state)[orderId],
    products:orderProductSelector(state)[orderId]
  }
}

//An object with prop names as keys and action creator  as values
const mapDispatchToProps={
  orderDetailAction
}
export default connect(mapStateToProps,mapDispatchToProps)(OrderDetail); 