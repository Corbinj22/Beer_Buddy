import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter> <Login /> </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})

describe('<Login />', () => {
  it('should show an error message if under 21', () => {
    const { getByPlaceholderText, getByText } = render(<BrowserRouter> <Login /> </BrowserRouter>);
    const noBtn = getByText('No')
    userEvent.click(noBtn)
    expect(getByText('Come back and see us when you\'re 21!')).toBeInTheDocument()
  })

  it('should allow user to login if over 21', () => {
    const { debug ,getByPlaceholderText, getByText } = render(<BrowserRouter> <Login /> </BrowserRouter>);
    const yesBtn = getByText('Yes')
  })
})
