import React from 'react'
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import ExpandedBeerCard from './ExpandedBeerCard'

const fakeMatchedBeer = {
  abv: 4.5,
  average: 6,
  description: "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
  ebc: 20,
  food_pairing: ["Spicy chicken tikka masala", "Grilled chicken quesadilla", "Caramel toffee cake"],
  ibu: 60,
  id: 1,
  image_url: "https://images.punkapi.com/v2/keg.png",
  name: "Buzz",
  ph: 4.4,
  srm: 10,
  tagline: "A Real Bitter Experience.",
  volume: {value: 20, unit: "litres"}
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter> <ExpandedBeerCard matchedBeer={fakeMatchedBeer}/> </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})

describe('<ExpandedBeerCard />', () => {
  it('it should display matched beer information', () => {
    const { getByPlaceholderText, getByText } = render(<BrowserRouter> <ExpandedBeerCard matchedBeer={fakeMatchedBeer}/> </BrowserRouter>);
    const matchedAbv = getByText('ABV: 4.5')
    const matchedIbu = getByText('IBU: 60')
    const matchedTagline = getByText('A Real Bitter Experience.')
    const matchedRaiting = getByText('Average Raiting: 6 stars')
  })

  it('should let user add a new raiting', () => {
    const mockSetNewAverage = jest.fn()
    const { getByPlaceholderText, getByText, getByDisplayValue } = render(<BrowserRouter> <ExpandedBeerCard matchedBeer={fakeMatchedBeer} setNewAverage={mockSetNewAverage}/> </BrowserRouter>);
    const matchedRaiting = getByText('Average Raiting: 6 stars')
    const userRaiting = getByDisplayValue('Star Raiting')
    const submitRaitingBtn = getByText('Submit')

    fireEvent.change(userRaiting, {target: {value: 2}})
    fireEvent.click(submitRaitingBtn)
    expect(mockSetNewAverage).toHaveBeenCalledTimes(1)
  })
})
