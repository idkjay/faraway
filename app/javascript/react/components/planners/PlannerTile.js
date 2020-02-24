import React, {useState} from "react";
import EditPlannerTile from "./EditPlannerTile";

const PlannerTile = (props) => {
  const { id, title, description, updatePlanner, deletePlanner } = props
  const [ editedPlanner, setEditedPlanner ] = useState({
    id: id,
    title: title,
    description: description
  })

  const handleDelete = () => {
    deletePlanner(id)
  }

  const handleEditSubmit = (event) => {
    debugger
    event.preventDefault()
    updatePlanner(editedPlanner)
  }

  const handleEditInputChange = (event) => {
    setEditedPlanner({
      ...editedPlanner,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  return(
    <div>
      <div className="card plannertile">
        <header className="card-header is-large">
          <p className="card-header-title" id="title">
            {title}
          </p>
        </header>

        <div className="card-content">
          <div className="content is-large">
            <p id="description">{description}</p>
          </div>
        </div>

        <EditPlannerTile
          id={id}
          title={title}
          description={description}
          handleEditSubmit={handleEditSubmit}
          handleDelete={handleDelete}
          handleEditInputChange={handleEditInputChange}
          editedPlanner={editedPlanner}
        />

      </div>
      <br/>
    </div>
  )
};

export default PlannerTile;
