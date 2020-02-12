import React from 'react';
import ErrorList from './ErrorList';
import _ from 'lodash';

const PlannerForm = ({ handleSubmit, handleInputChange, clearForm, newPlanner, errors }) => {
  return(
    <div>
      <h3>Make New Planner</h3>
      <form id="" onSubmit={handleSubmit} >
        <ErrorList errors={errors}/>
        <label>
          Title:
          <input onChange={handleInputChange} id="title" value={newPlanner.title}/>
        </label>

        <label>
          Review:
          <textarea onChange={handleInputChange} id="description" value={newPlanner.description}/>
        </label>

        <input className="button" id="submit" type="submit" />

        <input className="button" type="button" onClick={clearForm} value="Clear" />
      </form>
    </div>
  )
};

export default PlannerForm;
