import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
    return (
      <input className="new-todo" placeholder="What needs to be done?" autoFocus />
    );
  }
}

export default TodoInput;