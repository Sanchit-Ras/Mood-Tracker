//created global constants to avoid spelling mistakes in reducer's if else conditions by other developers.
export const HAPPY_BUTTON_CLICKED="happy button clicked";
export const SAD_BUTTON_CLICKED="sad button clicked";
export const CLEAR_BUTTON_CLICKED="clear button clicked";
export const happyButtonClicked=(value:number,date:Date)=>({
    type:HAPPY_BUTTON_CLICKED,
    payload:{value,date}
})
export const sadButtonClicked= (value:number,date:Date)=>({
    type:SAD_BUTTON_CLICKED,
    payload:{value,date}
})
export const clearButtonClicked={
    type:CLEAR_BUTTON_CLICKED
}