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
      <FilterButton filterLabel='ready to try' status='ready' onClick={toggleFilterReady} />
      <FilterButton filterLabel='on the way' status='otw' onClick={toggleFilterOnWay} />
      <FilterButton filterLabel='in the queue' status='queue' onClick={toggleFilterInQueue} />
      <FilterButton filterLabel='out of stock' status='oos' onClick={toggleFilterNoStock} />
    </div>
  )
}

export default Filters;
