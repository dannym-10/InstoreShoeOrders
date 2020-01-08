import React, {useState} from 'react';
import './FilterButton.scss';

function FilterButton ({filterLabel, status, updateReadyState, updateOtwState, updateQueueState, updateOosState}) {
  const [ filterReady, setFilterReady ] = useState(false);
  const [ filterOtw, setFilterOtw ] = useState(false);
  const [ filterQueue, setFilterQueue ] = useState(false);
  const [ filterOos, setFilterOos ] = useState(false);

  const toggleFilterReady = () => {
    if (status === 'ready') {
      setFilterReady(!filterReady);
      updateReadyState(filterReady);
    }
    if (status === 'otw') {
      setFilterOtw(!filterOtw);
      updateOtwState(filterOtw);
    }
    if (status === 'queue') {
      setFilterQueue(!filterQueue)
      updateQueueState(filterQueue)
    }
    if (status === 'oos') {
      setFilterOos(!filterOos);
      updateOosState(filterOos);
    }
  }

  return (
    <div className='FilterButtons-wrapper' onClick={toggleFilterReady}>
      <span className={`status-colour bg-${status}`} />
      <div className='filter-label'>{filterLabel}</div>
    </div>
  )
}

export default FilterButton;
