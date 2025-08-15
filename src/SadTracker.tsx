import { type FC } from 'react';
import { useSelector } from 'react-redux';
import {SadMomentsSelector } from './selectors/selectors';

type SadTrackerProps = {

}
const SadTracker: FC<SadTrackerProps> = () => {
    const sadMoments = useSelector(SadMomentsSelector);

    return (
            <ul className='bg-blue-500 px-8 py-2 m-4'>
                {sadMoments.map((moment) => (
                    <li key={moment.time.toString()}>
                        Sadness Level: {moment.intensity}, When: {moment.time.toString()}
                    </li>
                ))}
            </ul>
        
    );
}
export default SadTracker;