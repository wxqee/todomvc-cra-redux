import { GET_TODOS, ADD_TODO, TOGGLE_TODO } from "../actions/types";

const initialState = {
  data: {},
};

const todos = (state = initialState, action) => {
  switch(action.type) {
    case GET_TODOS:
      const { todos } = action;

      state.data = todos.reduce((r, todo) => ({
        ...r,
        [todo.id]: todo,
      }), {});

      return state;
    case ADD_TODO: {
      const { newTodo } = action;

      state.data[newTodo.id] = newTodo;

      return state;
    }
    case TOGGLE_TODO:
      const { id } = action;
      const todo = state.data[id];

      if (todo) {
        todo.completed = !todo.completed;
      }

      return state;
    default:
      return state;
  }
}

export default todos;
