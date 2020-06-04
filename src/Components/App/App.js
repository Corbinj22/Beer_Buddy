import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from '../Login/Login'

class App extends Component {
  constructor() {
    super();
      this.state = {
        fetchedBeers: [],
        allBeers: [],
        filteredBeers: [],
        selectedBeer: {}
      }
  }

  render() {
    return (
      <div className = "App" >
        <Switch>
          <Route path="/" component={() => <Login />} />
        </Switch>
      </div>
    );
  }
}

export default App;
