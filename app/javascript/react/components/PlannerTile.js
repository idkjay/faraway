import React from 'react';

const PlannerTile = (props) => {

  return (
    <div className='columns is-mobile'>
      <div className='column is-4'>
        <h2 id='title'>{props.title}</h2>
        <p id='description'>{props.description}</p>
      </div>
    </div>
  )
};

export default PlannerTile;
