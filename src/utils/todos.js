const TODOS_LOCALSTORAGE_KEY = 'todos.react-redux';

export const readTodos = () => {
  try {
    return JSON.parse(localStorage.getItem(TODOS_LOCALSTORAGE_KEY));
  } catch (e) {
    console.error(e);
    return null;
  }
}

export const saveTodos = ({ todos, nextId }) => {
  const todosJSON = JSON.stringify({ todos, nextId });
  localStorage.setItem(TODOS_LOCALSTORAGE_KEY, todosJSON);
}
