import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Main from './Main';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/:filter?" component={Main} />
      </Switch>
    );
  }
}

export default Routes;