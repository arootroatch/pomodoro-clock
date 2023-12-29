import {createSlice} from '@reduxjs/toolkit';

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
                        label: "Break",
                        timeLeft: state.breakControl
                    }
                }
            } else if (state.label === "Break"){
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
                if (state.label==="Break"){
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
    }
})

export const { setBreak, setSession, decrementTime, toggleRunning, reset} = timerSlice.actions;

export default timerSlice.reducer;