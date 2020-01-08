import React from 'react';
import './ShoeItem.scss';

function ShoeItem ({ name, category, size, colour, intials, status, image }) {
  return (
    <div className='ShoeItem-wrapper'>
      <div className={`status-container bg-${status}`}>
        <span />
      </div>
      <div className='main-container'>
        <div className='shoe-img-container'>
          <img src={image} alt={`shoe-img-${name}`} />
        </div>
        <p className='name-container'>{name}</p>
        <div className='category-container'>
          <span>Category:</span>
          <p>{category}</p>
        </div>
        <div className='size-container'>
          <span>Size:</span>
          <p>UK {size}</p>
        </div>
        <div className='colour-container'>
          <span>Colour:</span>
          <p>{colour}</p>
        </div>
        <span className='initials-container'>{intials}</span>
      </div>
    </div>
  )
}

export default ShoeItem;
