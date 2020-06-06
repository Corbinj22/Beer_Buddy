import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from '../Login/Login'
import HeadImg from '../HeadImg/HeadImg'
import Nav from '../Nav/Nav'
import Questionnaire from '../Questionnaire/Questionnaire'
import ExpandedBeerCard from '../ExpandedBeerCard/ExpandedBeerCard'
import { fetchedBeers } from'../../apiRequest'

class App extends Component {
  constructor() {
    super();
      this.state = {
        fetchedBeers: [],
        allBeers: [],
        filteredBeers: [],
        matchedBeer: {}
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

  setMatchedBeer = (matchedBeer) => {
     this.setState({
      matchedBeer : matchedBeer
    })
  }

  render() {
    return (
      <div className = "App" >
        <Switch>
            <Route
              path="/beer/:matchedBeer"
              component={() => (
                <div className="questionnaire-view">
                  <Nav />
                  <ExpandedBeerCard />
                </div>
              )}
            />
            <Route
              path="/questionnaire"
              component={() => (
                <div className="questionnaire-view">
                  <HeadImg />
                  <Nav />
                  <Questionnaire allBeers={this.state.allBeers} setMatchedBeer={this.setMatchedBeer} matchedBeer={this.state.matchedBeer}/>
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
