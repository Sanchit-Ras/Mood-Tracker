import {useState, type FC} from 'react';
import { useDispatch } from 'react-redux';
import { happyButtonClicked } from './actions';

type HappyIncrementorProps={

}
const HappyIncrementor:FC<HappyIncrementorProps>=()=>{
    const[happinessLevel,setHappinessLevel]=useState(0);
    const dispatch=useDispatch();
    function increment(){
        dispatch(happyButtonClicked(happinessLevel,new Date()));
    }
    return(
        <div className='m-4 font-bold'>
            <h3>How happy are you?</h3>
            <input type="text" value={happinessLevel} className='border-2 border-amber-400 rounded-md' onChange={(event)=>setHappinessLevel(+event.target.value)}/>
            <button className='bg-amber-400 p-3 ml-2' onClick={increment}>Yes</button>
        </div>
    );
}
export default HappyIncrementor;