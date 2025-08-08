import { createStore, type AnyAction } from "redux";
import happyReducer, { happyInitialState, type happyState } from "./reducers/happyReducer";
import sadReducer, { sadInitialState, type sadState } from "./reducers/sadReducer";
import { CLEAR_BUTTON_CLICKED } from "./actions";

export type Moment={
    intensity:number;
    time:Date
}

export type State={
    happy:happyState,
    sad:sadState
};
const initialState:State={
    happy:happyInitialState,
    sad:sadInitialState
}
//reducer should be non mutating and pure function
//we were using new Date()->the function was not pure (return {...currentState,happyMoments:[...currentState.happyMoments,{intensity:action.payload,time:new Date()}]};)
//now action object has the date in payload->reducer function is pure
function reducer(currentState=initialState, action:AnyAction): State{
    if(action.type===CLEAR_BUTTON_CLICKED){
        return {
            happy:happyInitialState,
            sad:sadInitialState
        }
    }
   return{
    happy:happyReducer(currentState.happy,action),
    sad:sadReducer(currentState.sad,action)
   }
}
const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;