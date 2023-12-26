import {createSlice} from '@reduxjs/toolkit';

const initialState = {value:25};

const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        increment: (state) => {
            if (state.value <60){
                state.value += 1
            } else {
                return state;
            }
        }, 
        decrement: (state)=>{
            if(state.value > 1){
                state.value -= 1
            } else {
                return state;
            }
        }
    }
})

export const {increment, decrement} = sessionSlice.actions;
export default sessionSlice.reducer;