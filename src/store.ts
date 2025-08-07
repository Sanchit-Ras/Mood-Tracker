import { createStore, type AnyAction } from "redux";
import { CLEAR_BUTTON_CLICKED, HAPPY_BUTTON_CLICKED, SAD_BUTTON_CLICKED } from "./actions";

type Moment={
    intensity:number;
    time:Date
}

export type State={
    happyMoments:Moment[];
    sadMoments:Moment[]
};
const initialState={
    happyMoments:[],
    sadMoments:[]
}
//reducer should be non mutating and pure function
//we were using new Date()->the function was not pure (return {...currentState,happyMoments:[...currentState.happyMoments,{intensity:action.payload,time:new Date()}]};)
//now action object has the date in payload->reducer function is pure
function reducer(currentState: State=initialState, action:AnyAction): State{
    if(action.type===HAPPY_BUTTON_CLICKED){
        return {...currentState,happyMoments:[...currentState.happyMoments,{intensity:action.payload.value,time:action.payload.date}]};
    }else if(action.type===SAD_BUTTON_CLICKED){
        return {...currentState,sadMoments:[...currentState.sadMoments,{intensity:action.payload.value,time:action.payload.date}]};
    }else if(action.type===CLEAR_BUTTON_CLICKED){
        return {happyMoments:[],sadMoments:[]}
    }
    return currentState;
}
const store=createStore(reducer,(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
export default store;