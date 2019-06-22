import { GET_TODOS, ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER, UPDATE_TODO } from "../actions/types";

const initialState = {
  data: {},
  filter: 'all',
};

const todos = (state = initialState, action) => {
  switch(action.type) {
    case GET_TODOS:
      const { todos } = action;
      state.data = todos.reduce((r, todo) => ({
        ...r,
        [todo.id]: todo,
      }), {});
      return { ...state };
    case ADD_TODO: {
      const { newTodo } = action;
      state.data[newTodo.id] = newTodo;
      return { ...state };
    }
    case UPDATE_TODO: {
      const { id, text } = action.payload
      state.data[id].text = text
      return { ...state, data: { ...state.data, [id]: { ...state.data[id] } } }
    }
    case TOGGLE_TODO: {
      const { id } = action;
      state.data[id].completed = !state.data[id].completed;
      return { ...state, data: { ...state.data, [id]: { ...state.data[id] } } };
    }
    case DELETE_TODO: {
      const { id } = action;
      delete state.data[id];
      return { ...state };
    }
    case SET_FILTER: {
      const { filter } = action;
      return { ...state, filter }
    }
    default:
      return state;
  }
}

export default todos;
