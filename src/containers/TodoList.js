import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectors from '../redux/selectors';
import Todo from '../components/Todo';

const mapStateToProps = state => ({
  todos: selectors.getTodos(state),
})

class TodoList extends Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map(todo => <Todo key={todo.id} todo={todo} />)}
      </ul>
    );
  }
}

export default connect(
  mapStateToProps,
)(TodoList);