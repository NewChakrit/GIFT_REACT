import React, { useContext, useState } from 'react';
import './editprofileform.css';
import Select from 'react-select';
import { interestOption } from '../../auths/register/docs/data';
import { UserContext } from '../../../contexts/UserContext';
import axios from '../../../config/axios';

function EditProfileForm({ person, setPerson, username }) {
    const { userData } = useContext(UserContext);
    const [date, setDate] = useState(person.About.birthDate);
    const [age, setAge] = useState(person.About.age);
    const [profileCaption, setProfileCaption] = useState(person.About.caption);
    const [editInterest, setEditInterest] = useState(person.About.interest);

    console.log(person);

    const handleChangeToggle = (value) => {
        const result = [];
        value.map((item) => result.push(item.value));
        setEditInterest(result.toString());
    };

    const handleSubmitUpdateProfile = async (e) => {
        try {
            e.preventDefault();
            await axios.put(`/about/${userData.id}`, {
                age: age,
                birthDate: date,
                caption: profileCaption,
                interest: editInterest,
            });
            const res = await axios.get(`/user/${username}`);
            setPerson(res.data.user);
            setDate('');
            setAge('');
            setProfileCaption('');
            setEditInterest('');
        } catch (err) {
            console.log(err.message);
        }
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
                <form
                    className="modal-content editProfileForm model-edit"
                    onSubmit={handleSubmitUpdateProfile}
                >
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
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
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
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
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
                                value={profileCaption}
                                onChange={(e) =>
                                    setProfileCaption(e.target.value)
                                }
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
