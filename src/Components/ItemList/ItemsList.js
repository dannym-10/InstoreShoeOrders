import React from 'react';
import ShoeItem from '../ShoeItem';
// import './ItemList.scss';

function ItemsList ({items}) {

  return (
    <ul className='ItemList-wrapper'>
      {items.map((shoe, index) => {
        return <ShoeItem key={index} name={shoe.productName} category={shoe.category} size={shoe.size} colour={shoe.colour} id={shoe.id} />
        // return <p>{index + 1}</p>
      })}
    </ul>
  )
}

export default ItemsList;
