import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../types';

interface TodosState {
  todos: Todo[] | [];
}

const initialState: TodosState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [...state.todos, action.payload];
    },
    checkTodo: (state, action) => {
      const { id, value } = action.payload;
      const index = state.todos.findIndex(elem => elem.id === id);
      state.todos[index].checked = value;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(elem => elem.id !== action.payload);
    },
  },
});

export const { createTodo, checkTodo, removeTodo } = todosSlice.actions;

export default todosSlice;
