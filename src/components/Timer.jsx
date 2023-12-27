import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import {useSelector} from 'react-redux';

export default function Timer(props){
    const sessionLength = useSelector((state)=>state.session.value);
    const breakLength = useSelector((state)=>state.break.value);

    const [timerLabel, setTimerLabel] = useState("Session");
    const [running, setRunning] = useState(false);
    const [timeLeft, setTimeLeft] = useState(sessionLength);
    console.log(sessionLength, timeLeft);

    function toggleRunning(){
        if (running){
            setRunning(false);
        } else {
            setRunning(true)
        }
    }


    useEffect(()=>{
        let countdown;
        if(running){
            countdown = setInterval(()=>{
                if (timeLeft>0){
                    setTimeLeft((prevState)=>prevState-1)
                } else {
                    setTimerLabel("Break");
                    setTimeLeft(breakLength*60);
                }
            }, 1000)
        } else {
            clearInterval(countdown);
        }
    }, [running])

    

    return(
        <div id="timer-wrapper">
            <h2 id="timer-label">{timerLabel}</h2>
            <div id="time-left">{String(Math.floor(sessionLength/60)).padStart(2,'0')}:{String(Math.floor(sessionLength%60)).padStart(2, '0')}</div>
            <button id="start_stop" onClick={()=>toggleRunning()}><FontAwesomeIcon icon={props.icon1}/><FontAwesomeIcon icon={props.icon2}/></button>
            <button id="reset"><FontAwesomeIcon icon={props.icon3}/></button>
        </div>
    )
}