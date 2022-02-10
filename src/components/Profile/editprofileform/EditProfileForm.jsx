import React from 'react';
import './editprofileform.css';

function EditProfileForm() {
    return (
        <div
            className="modal fade "
            id="EditProfileModal"
            tabIndex="-1"
            aria-labelledby="EditProfileModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-fullscreen ">
                <form className="modal-content editProfileForm">
                    <div className="modal-header">
                        <h5
                            className="modal-title editProfileTitle"
                            id="EditProfileModalLabel"
                        >
                            Edit Profile
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="dateofbirth" className="form-label">
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="dateofbirth"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="age" className="form-label">
                                Age
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="age"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Gender</label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                            >
                                <option defaultValue>
                                    Open this select menu
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="caption" className="form-label">
                                Caption
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="caption"
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
                        <button className="btn saveBtn" data-bs-dismiss="modal">
                            Save changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditProfileForm;
