import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './message/messageSlice';

const store = configureStore({
    reducer: {
        message: messageReducer,
    },
});

export default store;