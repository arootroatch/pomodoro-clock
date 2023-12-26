import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Timer(props){
    return(
        <div id="timer-wrapper">
            <h2 id="timer-label">Session</h2>
            <div id="time-left"></div>
            <button id="start_stop"><FontAwesomeIcon icon={props.icon1}/><FontAwesomeIcon icon={props.icon2}/></button>
            <button id="reset"><FontAwesomeIcon icon={props.icon3}/></button>
        </div>
    )
}