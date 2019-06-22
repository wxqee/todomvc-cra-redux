import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { matchPath } from "react-router"
import './App.css';
import Footer from './containers/Footer';
import Routes from './containers/Routes';
import { setFilter } from './redux/actions/todos';

const mapStateToProps = () => ({

})

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter))
})

class App extends Component {
  render() {
    return (
      <div>
        <Routes />
        <Footer />
      </div>
    )
  }

  componentWillMount() {
    this.updateFilter();
  }

  componentWillUpdate() {
    this.updateFilter();
  }

  updateFilter = () => {
    const match = matchPath(window.location.hash.slice(1), {
      path: "/:filter?", // The same as router
      exact: true,
      strict: false
    });

    this.props.setFilter(match.params.filter || 'all');
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
