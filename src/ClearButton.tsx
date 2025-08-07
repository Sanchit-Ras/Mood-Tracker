import type { FC } from "react";
import { useDispatch } from "react-redux";
import { clearButtonClicked } from "./actions";

export const ClearButton:FC=()=>{
    const dispatch=useDispatch();
    function clearMoments(){
        dispatch(clearButtonClicked);
    }
    return (
        <button className="px-4 py-2 font-bold text-white m-4 bg-green-500" onClick={clearMoments}>CLEAR</button>
    )
}