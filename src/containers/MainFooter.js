import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getItemsLeftCount } from '../redux/selectors/todos';

const mapStateToProps = state => ({
  itemLeftCount: getItemsLeftCount(state),
})

class MainFooter extends Component {
  render() {
    const { itemLeftCount } = this.props;

    return (
      <footer className="footer">
        {/* This should be `0 items left` by default */}
        <span className="todo-count"><strong>{itemLeftCount}</strong> item left</span>
        {/* Remove this if you don't implement routing */}
        {this.renderFilters()}
        {/* Hidden if no completed items are left ↓ */}
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }

  renderFilters = () => {
    const { params } = this.props.match
    const { filter = 'all' } = params
    const getFilterClassName = name => name === filter ? 'selected' : ''
    const filters = [
      { className: getFilterClassName('all'), href: '#/', label: 'All' },
      { className: getFilterClassName('active'), href: '#/active', label: 'Active' },
      { className: getFilterClassName('completed'), href: '#/completed', label: 'Completed' },
    ]

    return (
      <ul className="filters">
        {
          filters.map(({ className, href, label }) => (
            <li key={label}>
              <a className={className} href={href}>{label}</a>
            </li>
          ))
        }
      </ul>
    )
  }
}


export default withRouter(connect(mapStateToProps)(MainFooter));