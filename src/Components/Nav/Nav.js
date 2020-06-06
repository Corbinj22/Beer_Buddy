import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = ({ resetMatchedBeer }) => {
  return (
    <section className='nav-container'>
      <h1 className='nav-title'>Beer Buddy</h1>
      <div className='nav-links'>
      <Link to='/allbeers' className='nav-link-text'>
        All Beers
      </Link>
      <Link to='/questionnaire' onClick={resetMatchedBeer} className='nav-link-text'>
        Questionnaire
      </Link>
      <Link to='/' onClick={resetMatchedBeer} className='nav-link-text'>
        Logout
      </Link>
      </div>
    </section>
  )
}

export default Nav;
