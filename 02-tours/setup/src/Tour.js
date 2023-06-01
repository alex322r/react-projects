import React, { useState } from 'react';

const Tour = ({tour, removeTour}) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <article className="single-tour">
      <img src={tour.image} alt='name' />
      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <h4 className="tour-price">${tour.price}</h4>
        </div>
        <p>
          {showMore ? tour.info : tour.info.slice(0, 200)+'...'}
          <button onClick={() => setShowMore(prev => !prev)}>
            {showMore ? 'Show Less' : 'Read More' }  
          </button>
        </p>
        <button className="delete-btn" onClick={()=>removeTour(tour.id)}>
          not interested
        </button>
      </footer>
    </article>
  )
}

export default Tour;
