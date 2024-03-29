import React, { Component } from 'react'
import './Questionnaire.css'
import { Redirect } from 'react-router-dom';

class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTime : '',
      foundBeer: {},
      favBeer: '',
      dataSet: true
    }
}

  getMeals = () => {
    const foodOptions = this.props.allBeers.map(beer => {
      return <option data-testid={beer.food_pairing[0]} key={beer.name} value={beer.food_pairing[0]}>{beer.food_pairing[0]}</option>
    })
    return foodOptions;
  }

  setTime = (event) => {
    this.setState({
      selectedTime: event.target.value
    })
  }

  setFavBeer = (event) => {
    this.setState({
      favBeer: event.target.value
    })
  }

  setFoundBeer = (event) => {
    let matchedBeer = this.props.allBeers.find(beer => beer.food_pairing.includes(event.target.value))
    this.setState({
      foundBeer: matchedBeer
    })
  }

  setStateBeer = (event) => {
    event.preventDefault()
    this.props.setMatchedBeer(this.state.foundBeer)
  }

  setDisplay = () => {
    if (this.state.selectedTime && this.state.favBeer) {
      this.setState({
        dataSet: false
      })
    }
  }

  render () {
    if (this.props.matchedBeer.hasOwnProperty('name')) {
      return <Redirect to={`/beer/${this.props.matchedBeer.name}`}/>
    }

    return (
      <section className='question-container'>
      <p className='question-text-head'>Tell Us A Little About your Meal</p>
      <form className='customer-form' onChange={this.setDisplay}>
        <p className='question-text'>Time of Day</p>
        <div className='time-question'>
          <input onChange={this.setTime} type="radio" id="morning" name="time" value="morning"/>
            <label htmlFor='morning' className='spacing-answer'>Morning</label>
          <input onChange={this.setTime} type="radio" id="afternoon" name="time" value="afternoon"/>
            <label htmlFor='afternoon' className='spacing-answer'>Afternoon</label>
          <input onChange={this.setTime} type="radio" id="night" name="time" value="night"/>
            <label htmlFor='night' className='spacing-answer'>Night</label>
        </div>
        <p className='question-text'>What's Your Typicaly Beer Type?</p>
        <div className='fav-beer-question'>
          <input onChange={this.setFavBeer} type="radio" id="ale" name="beerType" value="ale"/>
            <label  htmlFor='ale' className='spacing-answer'>Ale</label>
          <input onChange={this.setFavBeer} type="radio" id="stout" name="beerType" value="stout"/>
            <label htmlFor='stout' className='spacing-answer'>Stout</label>
          <input onChange={this.setFavBeer} type="radio" id="lager" name="beerType" value="lager"/>
            <label htmlFor='lager' className='spacing-answer'>Lager</label>
        </div>
        <p className='question-text'>What Meal Did You Choose?</p>
        <div className='meal-question'>
          <select data-testid='select-meal' onChange={this.setFoundBeer}>
            <option value={null}>Please Select A Meal</option>
            {this.getMeals()}
          </select>
        </div>
          <button onClick={this.setStateBeer} disabled={this.state.dataSet} type='click' className='fetch-beer-button'>Fetch Beer</button>
      </form>
      </section>
    )
  }
};

export default Questionnaire
