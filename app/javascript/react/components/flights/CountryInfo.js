import React from 'react';

const CountryInfo = (props) => {

  return(
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.flight.destinationCountryFlag} alt="Image"/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.flight.destinationCountryName}</strong>
              <br/>
              The main language of {props.flight.destinationCountryName} is {props.flight.destinationCountryLanguage}
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}

export default CountryInfo;
