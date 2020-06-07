import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter> <Nav /> </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})


describe('<Nav />', () => {
  it('it should allow a user to view all beers', () => {
    const { debug ,getByPlaceholderText, getByText } = render(<BrowserRouter> <Nav /> </BrowserRouter>);
    const allBeersBtn = getByText('All Beers')
    userEvent.click(allBeersBtn)
  })

  it('it should allow a user to view the questionnaire', () => {
    const { debug ,getByPlaceholderText, getByText } = render(<BrowserRouter> <Nav /> </BrowserRouter>);
    const questionnaireBtn = getByText('Questionnaire')
    userEvent.click(questionnaireBtn)
  })

  it('it should allow a user to logout', () => {
    const { debug ,getByPlaceholderText, getByText } = render(<BrowserRouter> <Nav /> </BrowserRouter>);
    const logoutBtn = getByText('Logout')
    userEvent.click(logoutBtn)
  })

})
