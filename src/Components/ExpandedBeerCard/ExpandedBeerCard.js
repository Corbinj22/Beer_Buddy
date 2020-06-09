import React from 'react';
import './ExpandedBeerCard.css'
const ExpandedBeerCard = ({ matchedBeer, setNewAverage }) => {
  let average = Number(matchedBeer.average.toFixed(2));

  const makeNewAverage = (event) => {
    average = Number(((average + Number(event.target.value)) / 2).toFixed(2))
    return  average
  }

  const submitAverage = (event) => {
    event.preventDefault()
    setNewAverage(average)
  }

  return (
    <section className='expandedBeer-container'>
      <div className='top-card-container'>
        <div className='name-an-pic'>
          <h2>{matchedBeer.name}</h2>
          <img className='beer-img'alt={matchedBeer.name} src={matchedBeer.image_url}/>
        </div>
        <div className='all-details'>
          <h2>Profile</h2>
          <div className='details-container'>
            <p className='beer-detail'>ABV: {matchedBeer.abv}</p>
            <p className='beer-detail'>IBU: {matchedBeer.ibu}</p>
            <p className='beer-detail'>{matchedBeer.tagline}</p>
            <p className='beer-detail'>Average Raiting: {matchedBeer.average} stars</p>
            <p className='beer-detail'>Please Leave A Raiting:</p>
            <form>
              <button onClick={submitAverage} type="click">Submit</button>
              <select onChange={makeNewAverage} className='user-raiting-select'>
                <option value={null}>Star Raiting</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </select>
            </form>
          </div>
        </div>
      </div>
      <div className='bottom-card-container'>
        <p className='desciption-text card-text'><span className='description-rule'>Desciption</span>{matchedBeer.description}</p>
      </div>
    </section>
  )
}

export default ExpandedBeerCard;
