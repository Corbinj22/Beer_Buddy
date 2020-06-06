import React, { Component } from 'react'
import './Questionnaire.css'
import { Link } from 'react-router-dom';

class Questionnaire extends Component {
  constructor() {
    super();
    this.state = {
      selectedTime : '',
      foundBeer: '',
      favBeer: ''
    }

  const test = () => {
    console.log(1);
  }
}

  render() {
    return (
      <section className='question-container'>
      <p className='question-text-head'>Tell Us A Little About your Meal</p>
      <form className='customer-form'>
        <p className='question-text'>Time of Day</p>
        <div className='time-question'>
          <input type="radio" id="morning" name="time" value="morning"/>
          <label className='spacing-answer' for="morning">Morning</label>
          <input type="radio" id="afternoon" name="time" value="afternoon"/>
          <label className='spacing-answer' for="afternoon">Afternoon</label>
          <input type="radio" id="night" name="time" value="night"/>
          <label className='spacing-answer' for="night">Night</label>
        </div>
        <p className='question-text'>What Meal Did You Choose?</p>
        <div className='meal-question'>
          <select value={this.state.selectedMeal} onChange={this.test}>
               <option value="grapefruit">Grapefruit</option>
          </select>
        </div>
        <p className='question-text'>What's Your Typicaly Beer Type?</p>
        <div className='fav-beer-question'>
          <input type="radio" id="ale" name="beerType" value="ale"/>
          <label for="ale" className='spacing-answer'>Ale</label>
          <input type="radio" id="stout" name="beerType" value="stout"/>
          <label for="stout" className='spacing-answer'>Stout</label>
          <input type="radio" id="lager" name="beerType" value="lager"/>
          <label for="lager" className='spacing-answer'>Lager</label>
        </div>
        <button type='click' className='fetch-beer-button'>Fetch Beer</button>
      </form>
      </section>
    )

  }
};

export default Questionnaire
