import React from 'react';

const FlightTile = ({ flightData }) => {
  let { originCode, originCity, originCountry, destinationCode, destinationCity, destinationCountry, price, link, img } = flightData

  return(
    <div>
      <div className="card holder">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={img} id="img"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4" id="trip">{originCode} - {destinationCode}</p>
              <a className="button is-primary price" href={link}>${price}</a>
            </div>
          </div>

          <div className="content">
            {originCity}, {originCountry} to {destinationCity}, {destinationCountry}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlightTile;
