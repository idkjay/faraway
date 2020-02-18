import React, { useState } from "react";

const FlightForm = (props) => {
  const [ search, setSearch ] = useState({
    flyFrom: "",
    to: "",
    dateFrom: "",
    dateTo: ""
  })

  const handleInput = (event) => {
    let key = event.currentTarget.name
    let value = event.currentTarget.value
    setSeatch({
      ...search,
      [key]: value
    })
  }

  const handleSubmit = (event) => {

  }


  return(
    <form onSubmit={handleSubmit} action="/api/v1/flights_search" method="post">

      <div>
        <span className="help label">
          Location
        </span>
        <div className="control has-icons-left">
          <input className="input is-dark" type="text" name="flyFrom" placeholder="Location" />
          <span className="icon is-small is-left">
            <i className="fas fa-home"></i>
          </span>
        </div>
      </div>

      <div>
        <span className="help label">
          Destination
        </span>
        <div className="control has-icons-left">
          <input className="input is-dark" type="text" name="to" placeholder="Destination" />
          <span className="icon is-small is-left">
            <i className="fas fa-map-marker"></i>
          </span>
        </div>
      </div>

      <div>
        <span className="help label">
          Start Date
        </span>
        <div className="control has-icons-left">
          <input className="input is-dark" type="date" name="date_from" />
          <span className="icon is-small is-left">
            <i className="fas fa-plane-departure"></i>
          </span>
        </div>
      </div>

      <div>
        <span className="help label">
          End Date
        </span>
        <div className="control has-icons-left">
          <input className="input is-dark" type="date" name="date_to" />
          <span className="icon is-small is-left">
            <i className="fas fa-plane-arrival"></i>
          </span>
        </div>
      </div>

      <div className="search control">
        <button type="submit" value="Search" className="search-button button is-primary">Search</button>
      </div>

    </form>
  )
}

export default FlightForm;
