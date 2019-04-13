import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import './index.scss';

// import { Helmet } from 'react-helmet'

// <Helmet>
// <title>Messages</title>
// <meta name="description" content="Todos on steroid!" />
// <meta name="theme-color" content="#522e92" />

// <meta charset="UTF-8" />
// <meta name="msapplication-tap-highlight" content="no" />
// <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
// </Helmet>

const Home = ({}) => (
    <div>Home!</div>
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
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);