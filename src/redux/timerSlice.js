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
        incrementBreak: (state) => {
            if (state.breakControl < 3600 && !state.running){
                if(state.label==="Break"){
                    return {
                        ...state,
                        breakControl: state.breakControl+60,
                        timeLeft: state.breakControl+60
                    }
                }
                return {
                    ...state,
                    breakControl: state.breakControl + 60,
                }
            } else {
                return state;
            }
        }, 
        decrementBreak: (state)=> {
            if (state.breakControl>60 && !state.running){
                if (state.label==="Break"){
                    return {
                        ...state,
                        breakControl: state.breakControl-60,
                        timeLeft: state.breakControl-60
                    }
                } else {
                    return{
                        ...state,
                        breakControl: state.breakControl - 60,
                    }
                }
            } else {
                return state;
            }
        },
        incrementSession: (state) => {
            if (state.sessionControl <3600 && !state.running){
                if(state.label==="Session"){
                    return {
                        ...state,
                        sessionControl: state.sessionControl+60,
                        timeLeft: state.sessionControl+60
                    }
                } else {
                    return{
                        ...state,
                        sessionControl: state.sessionControl + 60,
                    }
                }
            } else {
                return state;
            }
        }, 
        decrementSession: (state)=>{
            if(state.sessionControl > 60 && !state.running){
                if(state.label==="Session"){
                    return {
                        ...state,
                        sessionControl: state.sessionControl-60,
                        timeLeft: state.sessionControl-60
                    }
                } else {
                    return {
                        ...state,
                        sessionControl: state.sessionControl - 60,
                    }
                }
            } else {
                return state;
            }
        }
    }
})

export const {decrementSession, decrementBreak, incrementSession, incrementBreak, decrementTime, toggleRunning, reset} = timerSlice.actions;

export default timerSlice.reducer;