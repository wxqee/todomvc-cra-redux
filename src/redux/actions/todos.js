import { GET_TODOS, ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER, UPDATE_TODO } from "./types";
import utils from '../../utils';

let nextId = 1;

export const getTodos = () => {
  const { todos, nextId: newNextId = 1 } = utils.readTodos() || {};

  nextId = newNextId;

  return {
    type: GET_TODOS,
    todos: todos ? Object.values(todos) : [],
  };
}

export const addTodo = text => (dispatch, getState) => {
  dispatch({
    type: ADD_TODO,
    newTodo: {
      id: nextId++,
      text,
      completed: false,
    },
  });

  utils.saveTodos({ todos: getState().todos.data, nextId });
}

export const updateTodo = (id, text) => (dispatch, getState) => {
  dispatch({
    type: UPDATE_TODO,
    payload: { id, text },
  })

  utils.saveTodos({ todos: getState().todos.data, nextId });
}

export const toggleTodo = id => (dispatch, getState) => {
  dispatch({
    type: TOGGLE_TODO,
    id,
  });

  utils.saveTodos({ todos: getState().todos.data, nextId });
};

export const deleteTodo = id => (dispatch, getState) => {
  dispatch({
    type: DELETE_TODO,
    id,
  });

  utils.saveTodos({ todos: getState().todos.data, nextId });
};

export const setFilter = filter => (dispatch, getState) => {
  const oldFilter = getState().todos.filter;
  console.log('%s vs %s', oldFilter, filter);

  if (oldFilter.toUpperCase() !== filter.toUpperCase()) {
    dispatch({
      type: SET_FILTER,
      filter,
    })
  }
}
