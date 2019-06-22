import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { getTodos } from '../redux/actions/todos';
import MainFooter from './MainFooter';

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
        <MainFooter />
      </section>
    );
  }

  componentDidMount = () => {
    this.props.getTodos();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);