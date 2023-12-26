import { configureStore } from '@reduxjs/toolkit';
import breakSlice from './breakSlice';
import sessionSlice from './sessionSlice';

const store = configureStore({
    reducer: {
        break: breakSlice,
        session: sessionSlice
    }
})

export default store;
