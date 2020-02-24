import React from 'react';

const CountryInfo = (props) => {

  return(
    <div className="box searchResults column">
      <article className="media">
        <div className="media-left has-text-centered">
          <figure className="image is-128x128">
            <img src={props.flight.destinationCountryFlag} alt="Image" id="flag"/>
          </figure>
        </div>
        <div className="media-content info">
          <div className="content">
            <strong id="name">{props.flight.destinationCountryName}</strong>
              <li id="capital">
                <strong>Capital:</strong> {props.flight.destinationCountryCapital}
              </li>
              <li id="language">
                <strong>Main Language:</strong> {props.flight.destinationCountryLanguage}
              </li>
              <li id="currency">
                <strong>Currency:</strong> {props.flight.destinationCountryCurrency}
              </li>
          </div>
        </div>
      </article>
    </div>
  )
}

export default CountryInfo;
