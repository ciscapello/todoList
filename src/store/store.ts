import { configureStore } from '@reduxjs/toolkit';
import { todosSlice } from './todos';

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
