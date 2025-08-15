import type { AnyAction } from "redux";
import type { Moment } from "../store";
import { SAD_BUTTON_CLICKED } from "../actions/mood-actions";
import { produce } from "immer";

export type sadState={
    sadMoments:Moment[];
}
export const sadInitialState={
    sadMoments:[]
}
function sadReducer(currentState:sadState=sadInitialState,action:AnyAction){
    if(action.type===SAD_BUTTON_CLICKED){
        return produce(currentState,(draft)=>{
            draft.sadMoments.push(action.payload)
        })
    }
    return currentState;
}
export default sadReducer;