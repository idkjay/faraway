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
    setSearch({
      ...search,
      [key]: value
    })
  }

  const handleSubmit = (event) => {

    event.preventDefault()
    let body = new FormData()
    body.append("search[flyFrom]", search.flyFrom)
    body.append("search[to]", search.to)
    body.append("search[dateFrom]", search.dateFrom)
    body.append("search[dateTo]", search.dateTo)
    fetch('/api/v1/flights_search', {
      method: 'POST',
      body: body,
      credentials: 'same-origin',
      headers: {
      'Accept': 'application/json'
      }
    })
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        setSearch({
          flyFrom: "",
          to: "",
          dateFrom: "",
          dateTo: ""
        })
        throw new Error(response.status + ": " + response.statusText);
      }
    })
    .then(body => {
      props.searchResults(body)
    })
    .catch(error => console.error("Error searching show: " + error.message))
  }

  return(
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <label className="help label" htmlFor="flyFrom">
          Location
        </label>
        <div className="control has-icons-left">
          <input
            className="input is-dark"
            type="text"
            name="flyFrom"
            placeholder="City name, Ex: Boston"
            onChange={handleInput}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-home"></i>
          </span>
        </div>
      </div>

      <div>
        <label className="help label" htmlFor="to">
          Destination
        </label>
        <div className="control has-icons-left">
          <input
            className="input is-dark"
            type="text"
            name="to"
            placeholder="City name, Ex: Orlando"
            onChange={handleInput}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-map-marker"></i>
          </span>
        </div>
      </div>

      <div>
        <label className="help label" htmlFor="dateFrom">
          Start Date
        </label>
        <div className="control has-icons-left">
          <input
            className="input is-dark"
            type="date"
            name="dateFrom"
            onChange={handleInput}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-plane-departure"></i>
          </span>
        </div>
      </div>

      <div>
        <label className="help label" htmlFor="dateTo">
          End Date
        </label>
        <div className="control has-icons-left">
          <input
            className="input is-dark"
            type="date"
            name="dateTo"
            onChange={handleInput}
          />
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
