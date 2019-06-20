import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { getTodos } from '../redux/actions/todos';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  getTodos: () => dispatch(getTodos()),
});

class Main extends Component {
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <TodoInput />
        </header>
        {/* This section should be hidden by default and shown when there are todos */}
        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <TodoList />
        </section>

        {/* This footer should hidden by default and shown when there are todos */}
        <footer className="footer">
          {/* This should be `0 items left` by default */}
          <span className="todo-count"><strong>0</strong> item left</span>
          {/* Remove this if you don't implement routing */}
          <ul className="filters">
            <li>
              <a className="selected" href="#/">All</a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
          {/* Hidden if no completed items are left ↓ */}
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
    );
  }

  componentDidMount = () => {
    this.props.getTodos();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);