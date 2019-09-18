import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import DashBoard from './pages/DashBoard'
import ListEmployees from './pages/ListEmployee'
import NewEmployee from './pages/NewEmployee'
import SearchEmployee from './pages/SearchEmployee'
import Nav from './components/Nav';

import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
          <div className="container">
            <Nav/>
            <Route path="/" exact component={DashBoard} />
            <Route path="/employee" exact component={ListEmployees} />
            <Route path="/employee/new" exact component={NewEmployee} />
            <Route path="/employee/search" exact component={SearchEmployee} />
          </div>
      </Router>
    )
  }
}

export default App