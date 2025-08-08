import type { AnyAction } from "redux";
import type { Moment } from "../store";
import { HAPPY_BUTTON_CLICKED } from "../actions";

export type happyState={
    happyMoments:Moment[];
}
export const happyInitialState={
    happyMoments:[]
}
function happyReducer(currentState:happyState,action:AnyAction):happyState{
     if(action.type===HAPPY_BUTTON_CLICKED){
            return {...currentState,happyMoments:[...currentState.happyMoments,{intensity:action.payload.value,time:action.payload.date}]};
     }
     return currentState;
}
export default happyReducer;