import {useState, type FC} from 'react';
import { useDispatch } from 'react-redux';
import { sadButtonClicked } from './actions/mood-actions';

type SadIncrementorProps={}
const SadIncrementor:FC<SadIncrementorProps>=()=>{
    const[sadnessLevel,setSadnessLevel]=useState(0);
    const dispatch=useDispatch();
    function increment(){
        dispatch(sadButtonClicked(sadnessLevel,new Date()));
    }
    return(
        <div className='m-4 font-bold'>
            <h3>How sad are you?</h3>
            <input type="text" value={sadnessLevel} className='border-2 border-blue-500 rounded-md' onChange={(event)=>{setSadnessLevel(+event.target.value)}}/>
            <button className='bg-blue-500 p-3 ml-2' onClick={increment}>Yes</button>
        </div>
    );
}
export default SadIncrementor;