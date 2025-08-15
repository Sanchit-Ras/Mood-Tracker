import type { AnyAction } from "redux";
import type { Moment } from "../store";
import { HAPPY_BUTTON_CLICKED } from "../actions/mood-actions";
import { produce } from "immer";

export type happyState={
    happyMoments:Moment[];
}
export const happyInitialState={
    happyMoments:[]
}
function happyReducer(currentState:happyState=happyInitialState,action:AnyAction):happyState{
     if(action.type===HAPPY_BUTTON_CLICKED){
            return produce(currentState,(draft)=>{
                draft.happyMoments.push(action.payload);
            });
     }
     return currentState;
}
export default happyReducer;
//Before using action creator newMoment={intensity:action.payload.value,time:action.payload.date}
//After using action creator newMoment=action.paylaod