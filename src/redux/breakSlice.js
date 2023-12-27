import {createSlice} from '@reduxjs/toolkit';

const initialState = {value: 300};

const breakSlice = createSlice({
    name: 'break',
    initialState,
    reducers: {
        incrementBreak: (state) => {
            if (state.value < 3600){
                state.value += 60
            } else {
                return state;
            }
        }, 
        decrementBreak: (state)=> {
            if (state.value>1){
                state.value -= 60
            } else {
                return state;
            }
        }
    }
})

export const {increment, decrement} = breakSlice.actions;
export default breakSlice.reducer;