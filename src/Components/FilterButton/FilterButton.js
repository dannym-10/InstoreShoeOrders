import React from 'react';
import './FilterButton.scss';

function FilterButton ({filterLabel, status}) {
// ${activeFilter ? 'active' : ''}
  return (
    <div className='FilterButtons-wrapper'>
      <span className={`status-colour bg-${status}`} />
      <div className='filter-label'>{filterLabel}</div>
    </div>
  )
}

export default FilterButton;
