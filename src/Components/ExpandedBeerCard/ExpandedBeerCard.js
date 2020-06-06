import React from 'react';
import './ExpandedBeerCard.css'

const ExpandedBeerCard = ({ matchedBeer }) => {
  return (
    <section className='expandedBeer-container'>
      <div className='top-card-container'>
        <div className='name-an-pic'>
          <h2 className='card-text'>{matchedBeer.name}</h2>
          <img className='beer-img' src={matchedBeer.image_url}/>
        </div>
        <div className='all-details'>
          <h2 className='card-text'>Profile</h2>
          <div className='details-container'>
            <p className='card-text beer-detail'>ABV: {matchedBeer.abv}</p>
            <p className='card-text beer-detail'>IBU: {matchedBeer.ibu}</p>
            <p className='card-text beer-detail'>{matchedBeer.tagline}</p>
            <p className='card-text beer-detail'>Average Raiting: {matchedBeer.average}</p>
          </div>
        </div>
      </div>
      <div className='bottom-card-container'>
        <p className='desciption-text card-text'>{matchedBeer.description}</p>
      </div>
    </section>
  )
}

export default ExpandedBeerCard;
