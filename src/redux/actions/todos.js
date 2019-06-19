import { GET_TODOS, ADD_TODO, TOGGLE_TODO } from "./types";
import utils from '../../utils';

let nextId = 1;

export const getTodos = () => ({
  type: GET_TODOS,
  todos: utils.todos.getTodos(),
})

export const addTodo = text => (dispatch, getState) => {
  dispatch({
    type: ADD_TODO,
    newTodo: {
      id: nextId++,
      text,
      completed: false,
    },
  });

  utils.todos.saveTodos(getState().todos.data);
}

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};
