import type { Moment } from "../store";
import { type ActionCreator } from "./index";
//created global constants to avoid spelling mistakes in reducer's if else conditions by other developers.
export const HAPPY_BUTTON_CLICKED="happy button clicked";
export const SAD_BUTTON_CLICKED="sad button clicked";
export const CLEAR_BUTTON_CLICKED="clear button clicked";

export const happyButtonClicked:ActionCreator<Moment>=(value:number,date:Date)=>({
    type:HAPPY_BUTTON_CLICKED,
    payload:{intensity:value,time:date}
})
export const sadButtonClicked:ActionCreator<Moment> =(value:number,date:Date)=>({
    type:SAD_BUTTON_CLICKED,
    payload:{intensity:value,time:date}
})
export const clearButtonClicked={
    type:CLEAR_BUTTON_CLICKED
}