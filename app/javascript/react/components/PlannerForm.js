import React from 'react';
import ErrorList from './ErrorList';
import _ from 'lodash';

const PlannerForm = ({ handleSubmit, handleInputChange, clearForm, newPlanner, errors }) => {
  return(
    <div className='columns'>
      <form id='' onSubmit={handleSubmit} >
        <ErrorList errors={errors}/>

        <div className="field column">
  				<span className="help label">Title</span>
          <div className="control has-icons-left">
            <input onChange={handleInputChange} id='title' placeholder="Title" type="text" className="input is-dark"  value={newPlanner.title}/>
            <span class="icon is-small is-left">
              <i class="fas fa-pen"></i>
            </span>
          </div>
        </div>

        <div className="field column">
  				<span className="help label">Description</span>
          <div className='control has-icons-left'>
            <textarea onChange={handleInputChange} id='description' placeholder="Description" type="text" className="input is-dark" value={newPlanner.description}/>
            <span class="icon is-small is-left">
              <i class="fas fa-book"></i>
            </span>
          </div>
        </div>

        <div className='field actions column is-grouped'>
          <div className='control'>
            <button className='button is-dark is-outlined' id='submit' type='submit'>Submit</button>
          </div>
          <div className='control'>
            <button className='button is-dark is-outlined' type='button' onClick={clearForm} value='Clear'>Clear</button>
          </div>
        </div>
      </form>
    </div>
  )
};

export default PlannerForm;
