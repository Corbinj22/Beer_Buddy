import React from 'react';
import './BeerCard.css';
import { Link } from 'react-router-dom';

const BeerCard = ({ currentBeer, setMatchedBeer }) => {
  const onClickHandler = (event) => {
    setMatchedBeer(currentBeer);
  };

  return (
    <Link
      to={`/beer/${currentBeer.name}`}
      className="beer-card"
      onClick={onClickHandler}
    >
      <h3 className="card-header">{currentBeer.name}</h3>
      <p className="card-text">ABV: {currentBeer.abv}</p>
      <p className="card-text">IBU: {currentBeer.ibu || 'Not Applicable'}</p>
      <p className="card-text">Avg. Raiting {currentBeer.average}</p>
      <img className="card-img" src={currentBeer.image_url} />
      <p className="card-text">{currentBeer.tagline}</p>
      <p className="click-style">Click Card For More Info</p>
    </Link>
  );
};

export default BeerCard;
