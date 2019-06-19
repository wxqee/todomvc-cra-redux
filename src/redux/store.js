import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { addTodo, toggleTodo, getTodos } from './actions/todos';

let store;

if (
  process.env.NODE_ENV !== "production" &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
} else {
  store = createStore(rootReducer, applyMiddleware(thunk));
}

// console.group('store');
// store.dispatch(getTodos());
// console.log(JSON.stringify(store.getState()));
// store.dispatch(addTodo('HTML'))
// store.dispatch(addTodo('CSS'))
// store.dispatch(addTodo('JS'))
// console.log(JSON.stringify(store.getState()));
// store.dispatch(toggleTodo(2))
// console.log(JSON.stringify(store.getState()));
// console.groupEnd('store');

export default store;
