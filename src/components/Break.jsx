import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useSelector} from "react-redux";
import { useDispatch} from 'react-redux'
import { increment, decrement } from '../redux/breakSlice';


export default function Break(props){

    const breakLength = useSelector((state)=>state.break.value);
    const dispatch = useDispatch();


    return(
        <div id='break-wrapper'>
            <h2 id="break-label">Break Length</h2>
            <button id='break-increment' onClick={()=>dispatch(increment())}><FontAwesomeIcon icon={props.icon1}/></button>
            <span id='break-length'>{breakLength}</span>
            <button id='break-decrement' onClick={()=>dispatch(decrement())}><FontAwesomeIcon icon={props.icon2}/></button>
        </div>
    )
}