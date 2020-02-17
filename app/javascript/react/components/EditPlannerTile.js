import React, { useState } from 'react';

const EditPlannerTile = (props) => {
  const [ editedPlanner, setEditedPlanner ] = useState({
    id: props.id,
    title: props.title,
    description: props.description
  })

  const handleEditSubmit = (event) => {
    event.preventDefault()
    props.updatePlanner(editedPlanner)
  }

  const handleEditInputChange = (event) => {
    setEditedPlanner({
      ...editedPlanner,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  return(
    <div className="modal">
      <form className="" onSubmit={handleEditSubmit}>
        <div className="edit-planner">
          Edit your planner
        </div>

        <label>
          Title:
          <input onChange={handleEditInputChange} id="title" value={editedPlanner.title} placeholder={props.title}/>
        </label>

        <label>
          Description:
          <textarea onChange={handleEditInputChange} id="description" value={editedPlanner.description} placeholder={props.description}/>
        </label>

        <input id="edit-submit" type="submit" value="Update Planner"/>
      </form>
    </div>
  )
}

export default EditPlannerTile;
