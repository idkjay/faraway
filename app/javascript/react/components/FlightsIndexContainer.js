import React, { useState, useEffect } from 'react';
import _ from 'lodash';

const FlightsIndexContainer = (props) => {
  const [ planners, setPlanners ] = useState([])

  useEffect(() => {
    fetch('/api/v1/planners')
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(response => {
      setPlanners(response.planners)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])

  const plannerTiles = planners.map(planner => {
    return(
      <div>
        <PlannerTile
          key={planner.id}
          plannerData={planner}
        />
      </div>
    )
  });

  return(
    <div>
      {plannerTiles}
    </div>
  )
};

export default FlightsIndexContainer;
