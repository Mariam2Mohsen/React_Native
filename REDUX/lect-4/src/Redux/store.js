import {configureStore} from '@reduxjs/toolkit';
import TodoSlice from './slices/Todo.slice';

export const store = configureStore({
    reducer: {
        todo: TodoSlice.reducer
    },
});