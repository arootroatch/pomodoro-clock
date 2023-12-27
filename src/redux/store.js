import { configureStore } from '@reduxjs/toolkit';
import breakSlice from './breakSlice';
import sessionSlice from './sessionSlice';
import timerSlice from './timerSlice';

const store = configureStore({
    reducer: {
        break: breakSlice,
        session: sessionSlice,
        timer: timerSlice
    }
})

export default store;
