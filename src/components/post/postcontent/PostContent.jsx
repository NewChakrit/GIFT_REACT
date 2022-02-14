import React from 'react';
import './postcontent.css';

function PostContent({ item }) {
    return (
        <div
            className="modal fade"
            id={`modal${item.id}`}
            tabIndex="-1"
            aria-labelledby={`${item.id}ModalLabel`}
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={`${item.id}ModalLabel`}>
                            Modal title
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div>{item.caption}</div>
                        <div>
                            <img
                                className="postPicture"
                                src={item.pictureUrl}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostContent;
