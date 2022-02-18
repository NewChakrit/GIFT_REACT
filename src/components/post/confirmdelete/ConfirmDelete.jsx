import React from "react";

function ConfirmDelete({ item }) {
  console.log(item.id);
  return (
    <div
      className="modal fade"
      id={`ModalDelete${item.id}`}
      tabIndex="-1"
      //   aria-labelledby={`${item.id}ModalDelete`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title"
              //   id={`${item.id}ModalDelete`}
              //   onClick={() => deletePost(item.id)}
            >
              Delete
            </h5>
          </div>
          <div className="modal-body">Are you sure you want to delete!!!</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Confirm Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelete;
