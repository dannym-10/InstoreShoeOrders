import React from 'react';
import ShoeItem from '../ShoeItem';
import './ItemList.scss';

function ItemsList ({items, loading}) {
  if (loading) {
    return <p>Loading posts...</p>;
  }

  return (
    <ul className='ItemList-wrapper'>
      {items.map((shoe) => {
        return <ShoeItem key={shoe.id} name={shoe.productName} category={shoe.category}
          size={shoe.size} colour={shoe.colour} id={shoe.id} intials={shoe.customerInitials}
          status={shoe.status} image={shoe.image} />
      })}
    </ul>
  )
}

export default ItemsList;
