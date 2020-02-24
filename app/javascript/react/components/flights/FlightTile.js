import React from 'react';

const FlightTile = ({ flightData }) => {
  let { originCode, originCity, originCountry, destinationCode, destinationCity, destinationCountry, price, link, img, source, name } = flightData

  return(
    <div className="flightTile">
      <div className="card holder">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={img} id="img"/>
            <span className="source"> Photo by <a href={source}>{name}</a> on <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">Unsplash</a></span>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content has-text-centered">
              <p className="title is-4" id="trip">{originCode} - {destinationCode}</p>
              <a className="button is-primary price is-large tileBut" href={link}>${price}</a>
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
