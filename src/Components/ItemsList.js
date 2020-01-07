import React from 'react';
import ShoeItem from './ShoeItem';

function ItemsList ({items}) {

  return (
    <ul className='ItemsList-wrapper'>
      {items.map((shoe, index) => {
        return <ShoeItem name={shoe.productName} category={shoe.category} size={shoe.size} colour={shoe.colour} />
        // return <p>{index + 1}</p>
      })}
    </ul>
  )
}

export default ItemsList;
