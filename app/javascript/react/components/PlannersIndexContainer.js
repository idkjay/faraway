import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import PlannerTile from './PlannerTile';
import PlannerForm from './PlannerForm';

const PlannersIndexContainer = (props) => {
  const [ planners, setPlanners ] = useState([])
  const [ newPlanner, setNewPlanner ] = useState({
    title: '',
    description: ''
  })
  const [ errors, setErrors ] = useState('')

  useEffect(() => {
    fetch('/api/v1/planners')
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
      setPlanners(response)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[]);

  const handleInputChange = (event) => {
    setNewPlanner({
      ...newPlanner,
      [event.currentTarget.id]: event.currentTarget.value
    })
  };

  const validSubmission = () => {
    let submitErrors = {}
    const requiredFields = ['title', 'description']
    requiredFields.forEach((field) => {
      if (newPlanner[field].trim() === '') {
        submitErrors = {
          ...submitErrors, [field]: 'is blank'
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validSubmission()) {
      addNewPlanner(newPlanner)
      clearForm()
    }
  };

  const clearForm = (event) => {
    setNewPlanner({
      title: '',
      description: ''
    })
  };

  const addNewPlanner = (formPayload) => {
    fetch('/api/v1/planners', {
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formPayload)
    })
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
      if (response) {
        setPlanners([...planners, response])
      } else {
        setErrors(response.errors)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  const plannerTiles = planners.map(planner => {
    return(
      <PlannerTile
        key={planner.id}
        title={planner.title}
        description={planner.description}
      />
    )
  });

  return(
    <div>
      <h3>Your PLANNERS</h3>
        <PlannerForm
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          newPlanner={newPlanner}
          errors={errors}
          clearForm={clearForm}
        />
      {plannerTiles}
    </div>
  )
};

export default PlannersIndexContainer;
