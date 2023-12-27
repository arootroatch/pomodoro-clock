import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { decrementTime, toggleRunning, reset } from "../redux/timerSlice";


export default function Timer(props){
    const timeLeft = useSelector((state)=>state.timer.timeLeft);
    const timerLabel = useSelector((state)=>state.timer.label);
    const dispatch =useDispatch();
    const running = useSelector((state)=>state.timer.running);
    


    function startStop(){
        dispatch(toggleRunning());
    }
    function resetTimer(){
        const beep = document.getElementById('beep');
        dispatch(reset());
        if (beep.duration>0){
            beep.pause();
            beep.currentTime = 0;
        }
    }

    const countdown = useRef();

    useEffect(()=>{
        if(running){
            const intervalID = setInterval(()=>{
                console.log(timeLeft);
                dispatch(decrementTime());
            }, 1000);
            countdown.current = intervalID;
        } else {
            const intervalID = countdown.current;
            clearInterval(intervalID);
        }
    }, [running])

    useEffect(()=>{
        if(timeLeft===0){
            document.getElementById('beep').play();
        }
    },[timeLeft])

    

    return(
        <div id="timer-wrapper">
            <h2 id="timer-label">{timerLabel}</h2>
            <div id="time-left">{String(Math.floor(timeLeft/60)).padStart(2,'0')}:{String(Math.floor(timeLeft%60)).padStart(2, '0')}</div>
            <button id="start_stop" onClick={()=>startStop()}><FontAwesomeIcon icon={props.icon1}/><FontAwesomeIcon icon={props.icon2}/></button>
            <button id="reset" onClick={()=>resetTimer()}><FontAwesomeIcon icon={props.icon3}/></button>
            <audio id="beep" preload="auto" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"></audio>
        </div>
    )
}