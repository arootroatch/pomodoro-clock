import {createSlice} from '@reduxjs/toolkit';

const breakPhrases = [
    "Time to walk the dog!",
    "Get up and stretch before you get hip problems!",
    "Have you watered your plants today?",
    "Drop and give me 20!",
    "Rest your carpals before they tunnel!",
    "You've been slouching for too long!", 
    "Break time!",
    "Time to refill your coffee!",
    "Go get a snack; you've earned it!",
    "BING BONG! TAKE A BREAK!"
]

const initialState = {
    label: 'Session',
    sessionControl: 1500,
    breakControl: 300,
    timeLeft: 1500, 
    running: false
}

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        reset: ()=>{
            return initialState;
        },
        toggleRunning: (state)=>{
            if(state.running){
                return{
                    ...state,
                    running: false
                }
            } else {
                return {
                    ...state,
                    running: true
                }
            }
        },
        decrementTime: (state)=>{
            if(state.label === 'Session'){
                if(state.timeLeft>0){
                    return {
                        ...state,
                        timeLeft: state.timeLeft-1
                    }
                } else {
                    return {
                        ...state,
                        label: breakPhrases[Math.floor(Math.random()*breakPhrases.length)],
                        timeLeft: state.breakControl
                    }
                }
            } else if (state.label !== "Session"){
                if(state.timeLeft>0){
                    return {
                        ...state,
                        timeLeft: state.timeLeft-1
                    }
                } else {
                    return {
                        ...state,
                        label: "Session",
                        timeLeft: state.sessionControl
                    }
                }
            } else {
                return state
            }
        },
        setBreak: (state, action)=>{
            if(!state.running){
                if (state.label!=="Session"){
                    return{
                        ...state,
                        breakControl: action.payload*60,
                        timeLeft: action.payload*60
                    }
                } else {
                    return {
                        ...state,
                        breakControl: action.payload*60,
                    }
                }
            } else {
                return state;
            }
        },
        setSession: (state, action)=>{
            if(!state.running){
                if (state.label==="Session"){
                    return{
                        ...state,
                        sessionControl: action.payload*60,
                        timeLeft: action.payload*60
                    }
                } else {
                    return {
                        ...state,
                        sessionControl: action.payload*60,
                    }
                }
            } else {
                return state;
            }
        },
    }
})

export const { setBreak, setSession, decrementTime, toggleRunning, reset} = timerSlice.actions;

export default timerSlice.reducer;