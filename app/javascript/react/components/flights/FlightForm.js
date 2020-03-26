import React, { useState } from "react";

const FlightForm = (props) => {
  const [ search, setSearch ] = useState({
    flyFrom: "",
    to: "",
    dateFrom: "",
    dateTo: ""
  })
  const [ loading, setLoading ] = useState(false)

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
    setLoading(true)
    let body = new FormData()
    body.append("search[flyFrom]", search.flyFrom)
    body.append("search[to]", search.to)
    body.append("search[dateFrom]", search.dateFrom)
    body.append("search[dateTo]", search.dateTo)
    fetch("/api/v1/flights_search", {
      method: "POST",
      body: body,
      credentials: "same-origin",
      headers: {
      "Accept": "application/json"
      }
    })
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        props.noAvailableFlights()
        setLoading(false)
        throw new Error(response.status + ": " + response.statusText);
      }
    })
    .then(body => {
      setLoading(false)
      props.searchResults(body)
    })
    .catch(error => console.error("Error searching show: " + error.message))
  }

  return(
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label className="help label" htmlFor="flyFrom">
            Location
          </label>
          
          <div className="control has-icons-left">
            <input
              className="input is-dark is-large"
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
              className="input is-dark is-large"
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
              className="input is-dark is-large"
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
              className="input is-dark is-large"
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
          <button type="submit" value="Search" className="search-button button is-primary is-focused is-large">Search</button>
        </div>
      </form>

      <br/>

      {loading &&
        <div className="loading loading--plane" title="Loading">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.5 104">
            <path d="M97.7 41.5c16.3 0 16.3 21-.2 21H66.7l-26 38H29.2l14.1-38h-23l-7.8 10h-9L8.2 52 3.5 31.5h9l7.8 10h23.1l-14.1-38h11.4l26 38h31z" fill="none" stroke="#FFF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4"/>
          </svg>
        </div>
      }
    </div>
  )
}

export default FlightForm;
