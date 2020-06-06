import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from '../Login/Login'
import HeadImg from '../HeadImg/HeadImg'
import Nav from '../Nav/Nav'
import Questionnaire from '../Questionnaire/Questionnaire'
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
      fetchedBeers: beers,
      allBeers: beers
    })
    await this.spoofAverage()
  }

  spoofAverage = () => {
     let spoofedBeers = this.state.fetchedBeers.map(beer => {
      const randomNum = Number((Math.random() * 5).toFixed(2))
      beer = {...beer, average : randomNum}
      return beer
    })
    this.setState({
      allBeers: spoofedBeers
    })
  }

  findMatchedBeer = (meal) => {
    let matchedBeer = this.state.allBeers.find(beer => beer.food_pairing.includes(meal))
    console.log(matchedBeer);
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
                  <Questionnaire allBeers={this.state.allBeers} findMatchedBeer={this.findMatchedBeer}/>
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
