import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import FlightTile from "./FlightTile"

const FlightsIndexContainer = (props) => {
  const [ flights, setFlights ] = useState([])

  // const addFlights = (formpayload)
  //   fetch api v1 flights search
  //   method post
  //   setFlights(response.flights_array)
  // <FlightTile
  //   />
  useEffect(() => {
    fetch('api/v1/flights_search')
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

      debugger
      setFlights(response)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[]);

  return(
    <div>
      hi

    </div>
  )
}

export default FlightsIndexContainer;
