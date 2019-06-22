export const getTodos = state => {
  const todos = Object.values(state.todos.data)

  switch (state.todos.filter) {
    case 'active':
      return todos.filter(todo => !todo.completed)
    case 'completed':
      return todos.filter(todo => todo.completed)
    default:
      return todos
  }
}

export const getItemsLeftCount = state => getTodos(state).reduce((r, todo) => r + (todo.completed ? 0 : 1), 0)
