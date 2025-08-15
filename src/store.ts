import { combineReducers, createStore} from "redux";
import happyReducer from "./reducers/happyReducer";
import sadReducer from "./reducers/sadReducer";
import productsReducer from "./reducers/products";
import orderReducer from "./reducers/orders";

export type Moment={
    intensity:number;
    time:Date
}

//reducer should be non mutating and pure function->always make a new object dont make changes in the old object
//but never make a useless new object
//we were using new Date()->the function was not pure (return {...currentState,happyMoments:[...currentState.happyMoments,{intensity:action.payload,time:new Date()}]};)
//now action object has the date in payload->reducer function is pure
const reducer=combineReducers({
    happy:happyReducer,
    sad:sadReducer,
    products:productsReducer,
    orders:orderReducer
   })
export type State=ReturnType<typeof reducer>
const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;