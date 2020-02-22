import React, {useState} from "react";

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
      <div className="card">
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

        <footer className="card-footer">
          <label className="card-footer-item far fa-edit fa-2x" htmlFor="element-toggle"></label>
          <input id="element-toggle" type="checkbox" />
          <div className="modal">
            <div className="modal-background"></div>
            <div className="modal-content">
              <div className="card">
                <form className="planner_edit_form" onSubmit={handleEditSubmit}>

                  <header className="card-header is-large">
                    <div className="card-header-title" id="title">
                      <input onChange={handleEditInputChange} id="title" value={editedPlanner.title} placeholder={props.title} className="input is-dark is-large"/>
                    </div>
                  </header>

                  <div className="card-content">
                    <div className="content">
                      <textarea onChange={handleEditInputChange} id="description" value={editedPlanner.description} placeholder={props.description} className="input is-dark is-large"/>
                    </div>
                  </div>

                  <footer className="card-footer">
                    <i onClick={handleEditSubmit} id="edit-submit" type="submit" value="Update Planner" className="card-footer-item far fa-save fa-2x"></i>
                    <i onClick={handleDelete} className="card-footer-item far fa-trash-alt fa-2x"></i>
                    <label className="card-footer-item far fa-window-close fa-2x" htmlFor="element-toggle"></label>
                  </footer>

                </form>
              </div>
            </div>
          </div>
          <i onClick={handleDelete} className="card-footer-item far fa-trash-alt fa-2x"></i>
        </footer>
      </div>
      <br/>
    </div>
  )
};

export default PlannerTile;
