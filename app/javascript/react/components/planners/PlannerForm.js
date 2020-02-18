import React from 'react';
import ErrorList from './ErrorList';
import _ from 'lodash';

const PlannerForm = ({ handleSubmit, handleInputChange, clearForm, newPlanner, errors }) => {

  return(
    <div className='columns'>
      <form id='planner-form' onSubmit={handleSubmit} >

        <div className="field column">
  				<span className="help label">Title</span>
          <div className="control has-icons-left">
            <input onChange={handleInputChange} id='title' placeholder="Title" type="text" className="input is-dark"  value={newPlanner.title}/>
            <span className="icon is-small is-left">
              <i className="fas fa-pen"></i>
            </span>
          </div>
        </div>

        <div className="field column">
  				<span className="help label">Description</span>
          <div className='control has-icons-left'>
            <textarea onChange={handleInputChange} id='description' placeholder="Description" type="text" className="input is-dark" value={newPlanner.description}/>
            <span className="icon is-small is-left">
              <i className="fas fa-book"></i>
            </span>
          </div>
        </div>

        <div className="buttons submit-clear">
          <button className="button is-dark is-outlined" type="submit">Submit</button>
          <button className="button is-dark is-outlined" type="button" onClick={clearForm}>Clear</button>
        </div>

        <div className="flashy">
          <ErrorList errors={errors}/>
        </div>
      </form>

    </div>
  )
};

export default PlannerForm;
