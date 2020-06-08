import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
jest.mock('../../apiRequest')
import { fetchedBeers } from '../../apiRequest'

const fakeData = [
  {
    abv: 4.5,
    average: 6.69,
    description: "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
    ebc: 20,
    food_pairing: (3) ["Spicy chicken tikka masala", "Grilled chicken quesadilla", "Caramel toffee cake"],
    ibu: 60,
    id: 1,
    image_url: "https://images.punkapi.com/v2/keg.png",
    name: "Buzz",
    ph: 4.4,
    srm: 10,
    tagline: "A Real Bitter Experience.",
    volume: {value: 20, unit: "litres"}},
  {
    abv: 4.1,
    average: 8.27,
    description: "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.",
    ebc: 15,
    food_pairing: (4) ["Fresh crab with lemon", "Garlic butter dipping sauce", "Goats cheese salad", "Creamy lemon bar doused in powdered sugar"],
    ibu: 41.5,
    id: 2,
    image_url: "https://images.punkapi.com/v2/2.png",
    ingredients: {malt: Array(3), hops: Array(4), yeast: "Wyeast 1056 - American Ale™"},
    name: "Trashy Blonde",
    ph: 4.4,
    srm: 15,
    tagline: "You Know You Shouldn't",
    volume: {value: 20, unit: "litres"}
  }
]

it('renders without crashing', () => {
  const div = document.createElement('div');
  fetchedBeers.mockResolvedValueOnce(fakeData)
  ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})

//
// describe('<App />', () => {
//
//   it('should test', () => {
//     fetchedBeers.mockResolvedValueOnce(fakeData)
//   })
// })
