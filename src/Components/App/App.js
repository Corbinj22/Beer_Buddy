import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from '../Login/Login'
import HeadImg from '../HeadImg/HeadImg'
import Nav from '../Nav/Nav'
import Questionnaire from '../Questionnaire/Questionnaire'
import ExpandedBeerCard from '../ExpandedBeerCard/ExpandedBeerCard'
import UserFilteredBeerDisplay from '../UserFilteredBeerDisplay/UserFilteredBeerDisplay'
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
      const randomNum = Number((Math.random() * 5)) + 4
      const setNum = Number(randomNum.toFixed(2))
      beer = {...beer, average : setNum}
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

  setNewAverage = (newAverage) => {
    this.setState(prevState => ({
      matchedBeer: {...prevState.matchedBeer, average: newAverage}
    }))
  }

  resetMatchedBeer = () => {
    this.setState({
     matchedBeer : {}
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
                  <Nav resetMatchedBeer={this.resetMatchedBeer}/>
                  <ExpandedBeerCard matchedBeer={this.state.matchedBeer} setNewAverage={this.setNewAverage}/>
                </div>
              )}
            />
            <Route
              path="/allbeers"
              component={() => (
                <div className="questionnaire-view">
                  <Nav resetMatchedBeer={this.resetMatchedBeer}/>
                  <UserFilteredBeerDisplay allBeers={this.state.allBeers} setMatchedBeer={this.setMatchedBeer}/>
                </div>
              )}
            />
            <Route
              path="/questionnaire"
              component={() => (
                <div className="questionnaire-view">
                  <HeadImg />
                  <Nav resetMatchedBeer={this.resetMatchedBeer}/>
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
