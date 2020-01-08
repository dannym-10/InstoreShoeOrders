import React, { useState, useEffect } from 'react';
import FilterButton from '../FilterButton';
import './Filters.scss';

function Filters () {
  const [ filterReady, setFilterReady ] = useState(false);
  const [ filterOnWay, setFilterOnWay ] = useState(false);
  const [ filterInQueue, setfilterInQueue ] = useState(false);
  const [ filterOutOfStock, setfilterOutOfStock ] = useState(false);

  // useEffect(() => {
    
  // }, [filterReady, filterOnWay, filterInQueue, filterOutOfStock]);

  const toggleFilterReady = () => {
    setFilterReady(!filterReady);
  }

  const toggleFilterOnWay = () => {
    setFilterOnWay(!filterOnWay);
  }

  const toggleFilterInQueue = () => {
    setfilterInQueue(!filterInQueue);
  }

  const toggleFilterNoStock = () => {
    setfilterOutOfStock(!filterOutOfStock);
  }

  return (
    <div className='Filters-wrapper'>
      <FilterButton filterLabel='ready to try' ststus='ready' onClick={toggleFilterReady} />
      <FilterButton filterLabel='on the way' ststus='otw' onClick={toggleFilterOnWay} />
      <FilterButton filterLabel='in the queue' ststus='queue' onClick={toggleFilterInQueue} />
      <FilterButton filterLabel='out of stock' ststus='oos' onClick={toggleFilterNoStock} />
    </div>
  )
}

export default Filters;
