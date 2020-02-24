import React, { useState, useEffect } from "react";
import FlightTile from "./FlightTile"
import CountryInfo from "./CountryInfo"
import FlightForm from "./FlightForm"

const FlightsIndexContainer = (props) => {
  const [ flights, setFlights ] = useState([])
  const [ background, setBackground ] = useState(true)
  const [ noFlights, setNoFlights ] = useState("")

  const searchResults = (results) => {
    setFlights(results)
    setBackground(false)
    setNoFlights("")
  }

  const noAvailableFlights = () => {
    setNoFlights("There are no available flights.")
    setFlights([])
  }

  const flightsMap = flights.map((flight,index) => {
    if(index===0) {
      return(
        <CountryInfo
          key={flight.id}
          flight={flight}
          />
      )
    } else {
      return(
        <FlightTile
          key={flight.id}
          flightData={flight}
          />
      )
    }
  })

  return(
    <div className="faraway_app">
      <section>
        <div className="container-fluid">
          <div className="columns is-gapless">
            <div className="column is-one-quarter searchFormCol">

              <div className="level brandLevel">

              </div>

              <div className="is-flex formWrapper column">

                <div className="clock">
                  <div id="Date"></div>
                  <ul className="clock-ul">
                      <li className="clock-li" id="hours"></li>
                      <li className="clock-li" id="point">:</li>
                      <li className="clock-li" id="min"></li>
                      <li className="clock-li" id="point">:</li>
                      <li className="clock-li" id="sec"></li>
                  </ul>
                </div>
                <br/>

                <div className="column flightsearch">
                  <FlightForm
                    searchResults={searchResults}
                    noAvailableFlights={noAvailableFlights}
                  />
                </div>
                <div className="noFlights">{noFlights}</div>

              </div>

              <a href="http://jordanchu.xyz/" className="creator">By Jordan Chu</a>
              <div className="devise socialIcon">
                <a href="https://www.linkedin.com/in/jordanchu1995"><i className="fab fa-linkedin fa-3x"></i></a>
                <a href="https://github.com/idkjay"><i className="fab fa-github-square fa-3x"></i></a>
                <a href="https://twitter.com/idkjay"><i className="fab fa-twitter-square fa-3x"></i></a>
              </div>
            </div>

            <div className="column pageLoadCol">
              <section className="section">
                {background &&
                  <img className="background" src="https://cdn.kapwing.com/final_5e51a3107818cb00168bd148_236835.gif"></img>
                }
                <div className="">
                  {flightsMap}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FlightsIndexContainer;
