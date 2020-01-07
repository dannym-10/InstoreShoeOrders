import React from 'react';

function ShoeItem ({ name, category, size, colour }) {
  return (
    <div className='ShoeItem-wrapper'>
      <p>{name}</p>
      <p>{category}</p>
      <p>{size}</p>
      <p>{colour}</p>
    </div>
  )
}

export default ShoeItem;
