import React from 'react';
// import './ShoeItem.scss';

function ShoeItem ({ name, category, size, colour }) {
  return (
    <div className='ShoeItem-wrapper'>
      <div className='shoe-img-container'>
        <img src='' alt={`shoe-img-${name}`} />
      </div>
      <p>{name}</p>
      <div className='category-container'>
        <span>Category:</span>
        <p>{category}</p>
      </div>
      <div>
        <span>Size:</span>
        <p>{size}</p>
      </div>
      <div>
        <span>Colour:</span>
        <p>{colour}</p>
      </div>
      <span>JD</span>
    </div>
  )
}

export default ShoeItem;
