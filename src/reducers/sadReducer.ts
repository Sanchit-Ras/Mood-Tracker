import type { AnyAction } from "redux";
import type { Moment } from "../store";
import { SAD_BUTTON_CLICKED } from "../actions";

export type sadState={
    sadMoments:Moment[];
}
export const sadInitialState={
    sadMoments:[]
}
function sadReducer(currentState:sadState,action:AnyAction){
    if(action.type===SAD_BUTTON_CLICKED){
        return {...currentState,sadMoments:[...currentState.sadMoments,{intensity:action.payload.value,time:action.payload.date}]};
    }
    return currentState;
}
export default sadReducer;