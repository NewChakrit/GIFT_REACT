import React, { useContext } from 'react';
import './editprofileform.css';
import Select from 'react-select';
import { interestOption } from '../../auths/register/docs/data';
import { AuthContext } from '../../../contexts/AuthContext';

function EditProfileForm() {
    const { setInterest } = useContext(AuthContext);

    const handleChangeToggle = (value) => {
        const result = [];
        value.map((item) => result.push(item.value));
        setInterest(result.toString());
    };
    return (
        <div
            className="modal fade "
            id="EditProfileModal"
            tabIndex="-1"
            aria-labelledby="EditProfileModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-fullscreen">
                <form className="modal-content editProfileForm model-edit">
                    <div className="modal-header mb-3 ">
                        <h5 className="modal-title " id="EditProfileModalLabel">
                            Edit Profile
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body mb-3">
                        <div className="mb-3">
                            <label htmlFor="dateofbirth" className="form-label">
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                className="form-control date-input"
                                id="dateofbirth"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="age" className="form-label">
                                Age
                            </label>
                            <input
                                type="text"
                                className="form-control age-input"
                                id="age"
                            />
                        </div>
                        {/* <div className="mb-3">
              <label className="form-label">INTEREST</label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div> */}
                        <div className="mb-2">INTEREST</div>
                        <Select
                            isMulti
                            name="interest"
                            options={interestOption}
                            className="basic-multi-select mb-3 selecter"
                            classNamePrefix="select"
                            onChange={handleChangeToggle}
                        />

                        <div className="mb-3">
                            <label htmlFor="caption" className="form-label ">
                                Caption
                            </label>
                            <input
                                type="text"
                                className="form-control caption-input"
                                id="caption"
                            />
                        </div>
                    </div>
                    <div className="modal-footer ">
                        {/* <button
              type="button"
              className="btn closebutton"
              data-bs-dismiss="modal"
            >
              Close
            </button> */}
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
