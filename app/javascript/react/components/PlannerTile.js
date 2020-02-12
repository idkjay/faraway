import React from 'react';

const PlannerTile = (props) => {

  return (
    <div className="">
      <h2 id="title">{props.title}</h2>
      <p id="description">{props.description}</p>
    </div>
  )
};

export default PlannerTile;
