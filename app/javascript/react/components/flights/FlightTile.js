import React from 'react';

const FlightTile = ({ flightData }) => {
  let { originCode, originCity, originCountry, destinationCode, destinationCity, destinationCountry, price, link } = flightData

  return(
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">`${originCode} to ${destinationCode}`</p>
            <p className="subtitle is-6">`$${price}`</p>
          </div>
        </div>

        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        </div>
      </div>
    </div>

  )
}

export default FlightTile;
