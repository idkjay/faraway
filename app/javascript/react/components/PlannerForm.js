import React from 'react';
import ErrorList from './ErrorList';
import _ from 'lodash';

const PlannerForm = ({ handleSubmit, handleInputChange, clearForm, newPlanner, errors }) => {
  return(
    <div>
      <form id='' onSubmit={handleSubmit} >
        <ErrorList errors={errors}/>

        <div className='field'>
          <label className='label'>Make New Planner</label>
          <div className='control'>
            <input onChange={handleInputChange} id='title' value={newPlanner.title} placeholder='Title'/>
          </div>
        </div>

        <div className='field'>
          <label className='label'></label>
          <div className='control'>
            <textarea onChange={handleInputChange} id='description' value={newPlanner.description} placeholder='Description'/>
          </div>
        </div>

        <div className='field is-grouped'>
          <div className='control'>
            <button className='button is-link' d='submit' type='submit'>Submit</button>
          </div>
          <div className='control'>
            <button className='button is-link is-light' type='button' onClick={clearForm} value='Clear'>Clear</button>
          </div>
        </div>
      </form>
    </div>
  )
};

export default PlannerForm;
