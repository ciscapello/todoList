import { RootState } from '../store';

export const selectAllTodos = (state: RootState) => {
  return state.todos.todos;
};
