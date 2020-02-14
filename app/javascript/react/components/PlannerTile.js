import React from 'react';
import EditPlannerTile from './EditPlannerTile';

const PlannerTile = (props) => {
  const { id, title, description, created, updatePlanner, deletePlanner } = props]

  const handleDelete = () => {
    deletePlanner(id)
  }

  return(
    <div>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title" id="title">
            {title}
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            <p id='description'>{description}</p>
          </div>
        </div>
        <time>{created}</time>
        <footer className="card-footer">
          <i onClick={updatePlanner} className="card-footer-item far fa-edit"></i>
          <i onClick={handleDelete} className="card-footer-item far fa-trash-alt"></i>
        </footer>
      </div>
      <br/>
    </div>

  )
};

export default PlannerTile;
