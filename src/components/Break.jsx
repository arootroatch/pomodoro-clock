import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useSelector} from "react-redux";
import { useDispatch} from 'react-redux'
import { incrementBreak, decrementBreak } from '../redux/timerSlice';


export default function Break(props){

    const breakLength = useSelector((state)=>state.timer.breakControl);
    const dispatch = useDispatch();


    return(
        <div id='break-wrapper'>
            <h2 id="break-label">Break Length</h2>
            <button id='break-increment' onClick={()=>dispatch(incrementBreak())}><FontAwesomeIcon icon={props.icon1}/></button>
            <span id='break-length'>{breakLength/60}</span>
            <button id='break-decrement' onClick={()=>dispatch(decrementBreak())}><FontAwesomeIcon icon={props.icon2}/></button>
        </div>
    )
}