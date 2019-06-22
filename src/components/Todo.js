import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateTodo, toggleTodo, deleteTodo } from '../redux/actions/todos';

const mapStateToProps = () => ({

})

const mapDispatchToProps = dispatch => ({
  updateTodo: (id, text) => dispatch(updateTodo(id, text)),
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id))
})

class Todo extends Component {
  editInput = React.createRef()

  state = {
    isEdit: false,
  }

  render() {
    const { text, completed } = this.props.todo;

    console.log('completed => %o', completed)

    return (
      <li className={this.getLiClassName()}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={this.handleChange}
          />
          <label onDoubleClick={this.handleDoubleClickLabel}>{text}</label>
          <button className="destroy" onClick={this.handleDelete}></button>
        </div>
        <form onSubmit={this.handleSubmitTextInput}>
          <input
            ref={this.editInput}
            className="edit"
            defaultValue={text}
            onBlur={() => this.setState({ isEdit: false })}
          />
        </form>
      </li>
    );
  }

  handleDoubleClickLabel = () => {
    this.setState({ isEdit: true }, () => {
      this.editInput.current.focus()
    })
  }

  handleSubmitTextInput = (e) => {
    e.preventDefault()
    this.props.updateTodo(this.props.todo.id, this.editInput.current.value)
    this.setState({ isEdit: false })
  }

  getLiClassName = () => {
    const { completed } = this.props.todo
    const { isEdit } = this.state
    const className = []

    if (completed) {
      className.push('completed')
    }

    if (!completed && isEdit) {
      className.push('editing')
    }

    return className.join(' ')
  }

  handleChange = () => {
    const { id } = this.props.todo;
    this.props.toggleTodo(id);
  }

  handleDelete = () => {
    const { id } = this.props.todo;
    this.props.deleteTodo(id);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
