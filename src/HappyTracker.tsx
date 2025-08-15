import { type FC } from 'react';
import { useSelector } from 'react-redux';
import { happyMomentsSelector } from './selectors/selectors';

type HappyTrackerProps = {

}
const HappyTracker: FC<HappyTrackerProps> = () => {
    const happyMoments = useSelector(happyMomentsSelector);
    return (
        <ul className='bg-amber-400 px-8 py-2 m-4'>
            {happyMoments.map((moment) => (
                <li key={moment.time.toString()}>
                    happy count: {moment.intensity}, When: {moment.time.toString()}
                </li>
            ))}
        </ul>
    );
}
export default HappyTracker;