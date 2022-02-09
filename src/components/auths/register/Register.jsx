import React, { useRef } from 'react';
import './register.css';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Register() {
    const inputEl = useRef();

    return (
        <div className="register">
            {/* Navbar */}
            <div className="registerNavbar">
                <Link to={'/'} className="backButton">
                    <button className="btn">
                        <MdOutlineKeyboardArrowLeft />
                    </button>
                </Link>
                <div className="pageName">Register</div>
                <div className="space">&nbsp;</div>
            </div>

            {/* Form */}
            <div className="registerform">
                <form className="pt-3 p-5">
                    <div className="mb-3 pb-2">
                        <input
                            type="text"
                            className="form-control inputLogin"
                            id="firstNameInput"
                            placeholder="FirstName"
                        />
                        <i className="bi bi-person placeHolderfirstName"></i>
                    </div>
                    <div className="mb-3 pb-2">
                        <input
                            type="text"
                            className="form-control inputLogin"
                            id="lastNameInput"
                            placeholder="Last Name "
                        />
                        <i className="bi bi-person placeHolderLastName"></i>
                    </div>
                    <div className="mb-3 pb-2">
                        <input
                            type="email"
                            className="form-control inputLogin"
                            id="emailInputRegister"
                            placeholder="Email "
                        />
                        <i className="bi bi-envelope placeHolderEmailRegister"></i>
                    </div>
                    <div className="mb-3 pb-2">
                        <input
                            type="password"
                            className="form-control inputLogin"
                            id="passwordInputRegister"
                            placeholder="Password "
                        />
                        <i className="bi bi-eye-slash placeHolderPasswordRegister"></i>
                    </div>
                    <div className="mb-3 pb-4">
                        <input
                            type="password"
                            className="form-control inputLogin"
                            id="confirmPasswordInput"
                            placeholder="Confirm Password "
                        />
                        <i className="bi bi-eye-slash placeHolderConfirmPassword"></i>
                    </div>

                    {/* Gender */}
                    <div className="mb-3 pb-4 optionsContainer">
                        <button
                            type="button"
                            className="btn options"
                            data-bs-toggle="modal"
                            data-bs-target="#GenderModal"
                        >
                            Gender
                        </button>
                        <div
                            className="modal fade"
                            id="GenderModal"
                            tabIndex="-1"
                            aria-labelledby="GenderModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-fullscreen-sm-down">
                                <div className="modal-content modalContent">
                                    <div className="p-4 d-flex justify-content-between">
                                        <div className="backButtonModal">
                                            <button
                                                type="button"
                                                className="btn "
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            >
                                                <MdOutlineKeyboardArrowLeft />
                                            </button>
                                        </div>
                                        <button
                                            type="button"
                                            className="btn skipButton"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                            data-bs-toggle="modal"
                                            data-bs-target="#ProfileImgModal"
                                        >
                                            Skip
                                        </button>
                                    </div>

                                    <div className="modal-body modalBody">
                                        <div
                                            style={{
                                                margin: '0 0 50px',
                                                fontSize: '3rem',
                                            }}
                                        >
                                            I am a
                                        </div>

                                        <div className="radioGroup">
                                            <div className="woman">
                                                <input
                                                    type="radio"
                                                    className="btn-check"
                                                    name="options-outlined"
                                                    id="Woman"
                                                    autoComplete="off"
                                                />
                                                <label
                                                    className="btn btn-outline-danger"
                                                    htmlFor="Woman"
                                                >
                                                    Woman
                                                </label>
                                            </div>
                                            <div className="man">
                                                <input
                                                    type="radio"
                                                    className="btn-check"
                                                    name="options-outlined"
                                                    id="Man"
                                                    autoComplete="off"
                                                />
                                                <label
                                                    className="btn btn-outline-danger"
                                                    htmlFor="Man"
                                                >
                                                    Man
                                                </label>
                                            </div>

                                            <div className="another">
                                                <input
                                                    type="radio"
                                                    className="btn-check"
                                                    name="options-outlined"
                                                    id="Other"
                                                    autoComplete="off"
                                                />
                                                <label
                                                    className="btn btn-outline-danger"
                                                    htmlFor="Other"
                                                >
                                                    Other
                                                </label>
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            className="btn btn-danger modalSubmitButton"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                            data-bs-toggle="modal"
                                            data-bs-target="#ProfileImgModal"
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Profile Img */}
                        <button
                            type="button"
                            className="btn options"
                            data-bs-toggle="modal"
                            data-bs-target="#ProfileImgModal"
                        >
                            Profile IMG
                        </button>
                        <div
                            className="modal fade"
                            id="ProfileImgModal"
                            tabIndex="-1"
                            aria-labelledby="ProfileImgModal"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-fullscreen-sm-down">
                                <div className="modal-content modalContent">
                                    <div className="p-4 d-flex justify-content-between">
                                        <div className="backButtonModal">
                                            <button
                                                type="button"
                                                className="btn "
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                                data-bs-toggle="modal"
                                                data-bs-target="#GenderModal"
                                            >
                                                <MdOutlineKeyboardArrowLeft />
                                            </button>
                                        </div>
                                        <button
                                            type="button"
                                            className="btn skipButton"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                            data-bs-toggle="modal"
                                            data-bs-target="#InterestModal"
                                        >
                                            Skip
                                        </button>
                                    </div>

                                    <div className="modal-body modalBody">
                                        <div
                                            style={{
                                                margin: '0 0 40px',
                                                fontSize: '3rem',
                                            }}
                                        >
                                            Profile Image
                                        </div>
                                        <div className="previewProfileImg">
                                            <input
                                                type="file"
                                                className="form-control Input d-none"
                                                ref={inputEl}
                                                // onChange={handleFileInputChange}
                                            />
                                            <img
                                                src="https://res.cloudinary.com/dbtlgaii3/image/upload/v1644336153/Gift/Profile_avatar_placeholder_large_tafrpo.png"
                                                alt="ProfileImg"
                                                role="button"
                                                onClick={() =>
                                                    inputEl.current.click()
                                                }
                                            />
                                        </div>

                                        <button
                                            type="button"
                                            className="btn btn-danger modalSubmitButton"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                            data-bs-toggle="modal"
                                            data-bs-target="#InterestModal"
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interests */}
                        <button
                            type="button"
                            className="btn options"
                            data-bs-toggle="modal"
                            data-bs-target="#InterestModal"
                        >
                            Interests
                        </button>
                        <div
                            className="modal fade"
                            id="InterestModal"
                            tabIndex="-1"
                            aria-labelledby="InterestModal"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-fullscreen-sm-down">
                                <div className="modal-content modalContent">
                                    <div className="p-4 d-flex justify-content-between">
                                        <div className="backButtonModal">
                                            <button
                                                type="button"
                                                className="btn "
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                                data-bs-toggle="modal"
                                                data-bs-target="#ProfileImgModal"
                                            >
                                                <MdOutlineKeyboardArrowLeft />
                                            </button>
                                        </div>
                                        <button
                                            type="button"
                                            className="btn skipButton"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            Skip
                                        </button>
                                    </div>

                                    <div className="modal-body modalBody">
                                        <div
                                            style={{
                                                margin: '0 0 ',
                                                fontSize: '3rem',
                                            }}
                                        >
                                            Interests
                                        </div>

                                        <select
                                            className="form-select interests"
                                            multiple
                                            aria-label="multiple select Interests"
                                        >
                                            <option value="0">0</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>

                                        <button
                                            type="button"
                                            className="btn btn-danger modalSubmitButton"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn loginButton">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
