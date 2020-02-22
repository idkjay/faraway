import React from "react";

const EditPlannerTile = (props) => {
  const { id, title, description, handleDelete, handleEditSubmit, handleEditInputChange, editedPlanner } = props

  return(
    <div>
      <footer className="card-footer">
        <label className="card-footer-item far fa-edit fa-2x" htmlFor="modal-1"></label>
        <div>
        </div>
        <input className="modal-state" id="modal-1" type="checkbox" />
        <div className="modal is-active">
          <label className="modal__bg" htmlFor="modal-1"></label>
            <div className="card modal__inner">
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
                  <label onClick={handleEditSubmit}id="edit-submit" type="submit" value="Update Planner" className="card-footer-item far fa-save fa-2x inside"></label>
                  <i onClick={handleDelete} className="card-footer-item far fa-trash-alt fa-2x inside"></i>
                  <label className="card-footer-item far fa-window-close fa-2x inside" htmlFor="modal-1"></label>
                </footer>

              </form>
          </div>
        </div>

        <i onClick={handleDelete} className="card-footer-item far fa-trash-alt fa-2x"></i>
      </footer>
    </div>
  )
};

export default EditPlannerTile
