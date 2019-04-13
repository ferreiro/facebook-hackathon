import React, { Component } from 'react'
import { Link, Switch, Route, withRouter } from 'react-router-dom';

import './index.scss';

import Home from './Home'

const Foo = ({}) => (
    <div></div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
              <Route
                  path='/'
                  exact
                  render={() => (
                      <Home />
                  )}
              ></Route>
              <Route
                  path='/foo'
                  exact
                  render={() => (
                      <Foo />
                  )}
              ></Route>
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);