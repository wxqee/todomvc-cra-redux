import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions/todos';

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: text => dispatch(addTodo(text)),
  };
}

class TodoInput extends Component {
  inputRef = React.createRef();

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          ref={this.inputRef}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.inputRef.current.value);
    this.inputRef.current.value = '';
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoInput);