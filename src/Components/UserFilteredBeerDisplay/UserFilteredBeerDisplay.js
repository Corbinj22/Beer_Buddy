import React from 'react'
import './UserFilteredBeerDisplay.css'
import BeerCard from '../BeerCard/BeerCard'

const UserFilteredBeerDisplay = ({ allBeers,setMatchedBeer }) => {

  const populateBeerCards = () => {
    const beerCards = allBeers.map(beer => {
      return <BeerCard currentBeer={beer} key={beer.name} setMatchedBeer={setMatchedBeer} />
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
