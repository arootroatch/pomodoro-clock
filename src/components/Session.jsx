import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {useSelector} from 'react-redux';
import { increment, decrement } from "../redux/sessionSlice";
import {useDispatch} from 'react-redux'

export default function Session(props){

    const dispatch = useDispatch();

    const sessionLength = useSelector((state)=>state.session.value)
    return(
        <div id="session-wrapper">
            <h2 id="session-label">Session Length</h2>
            <button id="session-increment" onClick={()=>dispatch(increment())}><FontAwesomeIcon icon={props.icon1}/></button>
            <span id="session-length">{sessionLength}</span>
            <button id="session-decrement" onClick={()=>dispatch(decrement())}><FontAwesomeIcon icon={props.icon2}/></button>
        </div>
    )
}