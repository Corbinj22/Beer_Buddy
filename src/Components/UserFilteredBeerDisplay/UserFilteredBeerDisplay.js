import React from 'react'
import './UserFilteredBeerDisplay.css'
import BeerCard from '../BeerCard/BeerCard'
import { Link } from 'react-router-dom';

const UserFilteredBeerDisplay = ({ allBeers,setMatchedBeer }) => {

  const populateBeerCards = () => {
    const beerCards = allBeers.map(beer => {
      return <BeerCard currentBeer={beer} setMatchedBeer={setMatchedBeer} />
    })
    return beerCards
  }

  return (
    <section className='filteredBeers-container'>
      {populateBeerCards()}
    </section>
  )
}


export default UserFilteredBeerDisplay;
