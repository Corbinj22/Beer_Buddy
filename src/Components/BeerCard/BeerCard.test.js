import React from 'react'
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import BeerCard from './BeerCard'

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
  ReactDOM.render(<BrowserRouter> <BeerCard currentBeer={fakeMatchedBeer} key={fakeMatchedBeer.name}/> </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})

describe('<BeerCard />', () => {
  it('it should display selected beer information', () => {
    const { getByText } = render(<BrowserRouter> <BeerCard currentBeer={fakeMatchedBeer} key={fakeMatchedBeer.name}/> </BrowserRouter>);
    const selectedName = getByText('Buzz')
    const selectedAbv = getByText('ABV: 4.5')
    const selectedIbu = getByText('IBU: 60')
    const selectedTagline = getByText('A Real Bitter Experience.')
  })
})
