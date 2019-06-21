import React, { Component } from 'react';

class Todo extends Component {
  render() {
    const { text, completed } = this.props.todo;

    return (
      <li className={`${completed ? 'completed' : ''}`}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onClick={this.handleClick}
          />
          <label>{text}</label>
          <button className="destroy" onClick={this.handleDelete}></button>
        </div>
        <input className="edit" value="Create a TodoMVC template" />
      </li>
    );
  }

  handleClick = () => {
    const { id } = this.props.todo;
    this.props.onClick(id);
  }

  handleDelete = () => {
    const { id } = this.props.todo;
    this.props.onDelete(id);
  }
}

export default Todo;
