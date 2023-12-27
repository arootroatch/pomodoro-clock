import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {useSelector} from 'react-redux';
import { incrementSession, decrementSession } from "../redux/timerSlice";
import {useDispatch} from 'react-redux'

export default function Session(props){

    const dispatch = useDispatch();
    const sessionLength = useSelector((state)=>state.timer.sessionControl);

    return(
        <div id="session-wrapper">
            <h2 id="session-label">Session Length</h2>
            <button id="session-increment" onClick={()=>dispatch(incrementSession())}><FontAwesomeIcon icon={props.icon1}/></button>
            <span id="session-length">{sessionLength/60}</span>
            <button id="session-decrement" onClick={()=>dispatch(decrementSession())}><FontAwesomeIcon icon={props.icon2}/></button>
        </div>
    )
}