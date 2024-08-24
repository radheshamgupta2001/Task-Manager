import React from 'react';
import './PriorityFilter.css';

function PriorityFilter({ setFilter }) {
  return (
    <div className="priority-filter">
      <button onClick={() => setFilter('All')}>All</button>
      <button onClick={() => setFilter('High')}>High</button>
      <button onClick={() => setFilter('Medium')}>Medium</button>
      <button onClick={() => setFilter('Low')}>Low</button>
      <button onClick={() => setFilter('Done')}>Done</button>
    </div>
  );
}

export default PriorityFilter;
