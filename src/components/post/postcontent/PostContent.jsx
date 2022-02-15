import React from 'react';
import { useContext } from 'react';
import { PostContext } from '../../../contexts/PostContext';
import './postcontent.css';

function PostContent({ item }) {
    const { deletePost } = useContext(PostContext);
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
                        <div className="left-menu">
                            <button type="button" className="btn btn-light">
                                Edit
                            </button>

                            <button
                                type="button"
                                className="btn btn-light"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => deletePost(item.id)}
                            >
                                Delete
                            </button>
                        </div>

                        <div className="right-menu">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
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
                    <div className="modalFooter">
                        <button
                            className="btn btn-footer"
                            style={{ height: '50px', width: '60px' }}
                        >
                            <i className="bi bi-heart-fill heartIcon" />
                        </button>
                        <div className="like-amount">200</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostContent;
