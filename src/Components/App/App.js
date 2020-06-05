import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from '../Login/Login'
import HeadImg from '../HeadImg/HeadImg'
import Nav from '../Nav/Nav'
import { fetchedBeers } from'../../apiRequest'

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

  componentDidMount = async () => {
    const beers = await fetchedBeers()
    await this.setState({
      fetchedBeers: beers
    })
  }

  render() {
    return (
      <div className = "App" >
        <Switch>
            <Route
              path="/questionnaire"
              component={() => (
                <div className="questionnaire-view">
                  <HeadImg />
                  <Nav />
                </div>
              )}
            />
            <Route path="/"
            component={() =>
              <Login />}
              />
        </Switch>
      </div>
    );
  }
}

export default App;
