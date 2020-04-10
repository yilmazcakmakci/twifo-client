import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home/'
import Login from './components/login'
import Context from './context'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import Navbar from './components/layout/navbar'
import Application from './components/application/app'
import Error404 from './components/404'

const client = new ApolloClient({
  uri : process.env.REACT_APP_API_URL + 'graphql'
})

export class App extends Component {

  render() {
    return (
        <Router>
          <ApolloProvider client={client}>
            <Context>
              <Navbar />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/app' component={Application} />
                <Route exact path='*' component={Error404} />
              </Switch>
            </Context>
          </ApolloProvider>
        </Router>
    )
  }
}

export default App