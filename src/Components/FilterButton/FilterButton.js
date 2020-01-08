import React from 'react';
import './FilterButton.scss';

function FilterButton ({filterLabel, ststus}) {
// ${activeFilter ? 'active' : ''}
  return (
    <div className='FilterButtons-wrapper'>
      <span className={`status-colour bg-${ststus}`} />
      <div className='filter-label'>{filterLabel}</div>
    </div>
  )
}

export default FilterButton;
