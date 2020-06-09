import React from 'react';
import ReactDOM from 'react-dom';
import { Router }  from 'react-router';
import { createMemoryHistory } from 'history';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { fetchedBeers } from '../../apiRequest'
import App from './App';
jest.mock('../../apiRequest')



describe('<App />', () => {
  let fakeData;

  beforeEach(() => {
    fakeData = [
      {
        abv: 4.5,
        average: 6.69,
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
        volume: {value: 20, unit: "litres"}},
      {
        abv: 4.1,
        average: 8.27,
        description: "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.",
        ebc: 15,
        food_pairing: ["Fresh crab with lemon", "Garlic butter dipping sauce", "Goats cheese salad", "Creamy lemon bar doused in powdered sugar"],
        ibu: 41.5,
        id: 2,
        image_url: "https://images.punkapi.com/v2/2.png",
        name: "Trashy Blonde",
        ph: 4.4,
        srm: 15,
        tagline: "You Know You Shouldn't",
        volume: {value: 20, unit: "litres"}
      }
    ]
  })

  afterEach(() => {
    cleanup;
  })

  it('should render to the Dom', async () => {
    fetchedBeers.mockResolvedValueOnce(fakeData)
    // const mockrender = render(<Router> <App /> </Router>)
    const history = createMemoryHistory()
    const mockrender = render(<Router history={history}> <App /> </Router>)
    const { getByText, getByPlaceholderText } = mockrender
    const title = getByText('Beer Buddy')
    expect(title).toBeInTheDocument()
  })

  it('should be able to login', async () => {
    jest.resetAllMocks()
    fetchedBeers.mockResolvedValueOnce(fakeData)
    // const mockrender = render(<Router> <App /> </Router>)
    const history = createMemoryHistory()
    const mockrender = render(<Router history={history}> <App /> </Router>)
    const { getByText, getByPlaceholderText } = mockrender
    const title = getByText('Beer Buddy')
    expect(getByText('Beer Buddy')).toBeInTheDocument()
    const loginBtn = getByText('Yes')

    fireEvent.click(loginBtn);
    expect(getByText('Tell Us A Little About your Meal')).toBeInTheDocument()
  })

  it('should be able to match a beer', async () => {

    jest.resetAllMocks()
    fetchedBeers.mockResolvedValueOnce(fakeData)
    const history = createMemoryHistory()
    const mockrender = render(<Router history={history}> <App /> </Router>)
    const {getByText, getByPlaceholderText, getByLabelText, debug, getByTestId} = mockrender

    const loginBtn = getByText('Yes')
    fireEvent.click(loginBtn);
    expect(getByText('Tell Us A Little About your Meal')).toBeInTheDocument()

    const mealSelection = getByText('Please Select A Meal')
    const morningSelection = getByText('Morning')
    const beerSelection = getByLabelText('Ale')
    const fetchButton = getByText('Fetch Beer')

    fireEvent.click(beerSelection)
    fireEvent.click(morningSelection)

    getByTestId('select-meal').value = 'Spicy chicken tikka masala'
    fireEvent.change(getByTestId('select-meal'), {target: {value: 'Spicy chicken tikka masala'}})
    // fireEvent.click(fetchButton)
    // await waitFor(() => {
    // })
  })

})
