import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectors from '../redux/selectors';
import Todo from '../components/Todo';
import { toggleTodo, deleteTodo } from '../redux/actions/todos';

const mapStateToProps = state => ({
  todos: selectors.getTodos(state),
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
})

class TodoList extends Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map(todo => <Todo key={todo.id} todo={todo} onClick={this.handleToggle} onDelete={this.handleDelete} />)}
      </ul>
    );
  }

  handleToggle = id => {
    this.props.toggleTodo(id);
  }

  handleDelete = id => {
    this.props.deleteTodo(id);
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);