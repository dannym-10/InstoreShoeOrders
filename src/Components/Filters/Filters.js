import React, { useState } from 'react';
import FilterButton from '../FilterButton';
import './Filters.scss';

function Filters () {
  const [ filterReady, setFilterReady ] = useState(false);
  const [ filterOnWay, setFilterOnWay ] = useState(false);
  const [ filterInQueue, setfilterInQueue ] = useState(false);
  const [ filterOutOfStock, setfilterOutOfStock ] = useState(false);

  const toggleFilterReady = () => {
    setFilterReady(filterReady => !filterReady);
  }

  const toggleFilterOnWay = () => {
    setFilterOnWay(filterOnWay => !filterOnWay);
  }

  const toggleFilterInQueue = () => {
    setfilterInQueue(filterInQueue => !filterInQueue);
  }

  const toggleFilterNoStock = () => {
    setfilterOutOfStock(filterOutOfStock => !filterOutOfStock);
  }

  return (
    <div className='Filters-wrapper'>
      <FilterButton filterLabel='ready to try' status='ready' updateReadyState={(value) => toggleFilterReady(value)} />
      <FilterButton filterLabel='on the way' status='otw' updateOtwState={(value) => toggleFilterOnWay(value)} />
      <FilterButton filterLabel='in the queue' status='queue' updateQueueState={(value) => toggleFilterInQueue(value)} />
      <FilterButton filterLabel='out of stock' status='oos' updateOosState={(value) => toggleFilterNoStock(value)} />
    </div>
  )
}

export default Filters;
