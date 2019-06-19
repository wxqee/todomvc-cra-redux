const TODOS_LOCALSTORAGE_KEY = 'todos.react-redux';

export const getTodos = () => {
  try {
    return JSON.parse(localStorage.getItem(TODOS_LOCALSTORAGE_KEY)) || [];
  } catch (e) {
    console.error(e);
    return [];
  }
}

export const saveTodos = todos => {
  const todosJSON = JSON.stringify(Object.values(todos));
  localStorage.setItem(TODOS_LOCALSTORAGE_KEY, todosJSON);
}
