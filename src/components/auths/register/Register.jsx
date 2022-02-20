import React, { useRef } from 'react';
import './register.css';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import axios from '../../../config/axios';
import Select from 'react-select';
import { interestOption } from './docs/data';

function Register() {
    const {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        imageUrl,
        setImageUrl,
        gender,
        setGender,
        interest,
        setInterest,
        loading,
        setLoading,
        handleSubmitRegister,
        ageRegister,
        setAgeRegister,
    } = useContext(AuthContext);
    const inputEl = useRef();

    const handleFileInputChange = (e) => {
        e.preventDefault();
        setLoading(true);
        if (!e.target.value) return;

        const reader = new FileReader();

        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = () => {
            uploadImage(reader.result);
        };
        reader.onerror = () => {
            console.error('AHHHHHHHH!!');
        };
    };

    const uploadImage = async (base64EncodedImage) => {
        try {
            const res = await axios.post('/upload', {
                data: base64EncodedImage,
            });
            setImageUrl(res.data.url);
            setLoading(false);
        } catch (err) {
            alert('File size too large.');
        }
    };

    const handleChange = (value) => {
        const result = [];
        value.map((item) => result.push(item.value));
        setInterest(result.toString());
    };

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
                <form className="pt-3 p-5" onSubmit={handleSubmitRegister}>
                    <div className="mb-3 pb-2">
                        <input
                            type="text"
                            className="form-control inputLogin"
                            id="firstNameInput"
                            placeholder="FirstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <i className="bi bi-person placeHolderfirstName"></i>
                    </div>
                    <div className="mb-3 pb-2">
                        <input
                            type="text"
                            className="form-control inputLogin"
                            id="lastNameInput"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <i className="bi bi-person placeHolderLastName"></i>
                    </div>
                    <div className="mb-3 pb-2">
                        <input
                            type="text"
                            className="form-control inputLogin"
                            id="userNameInput"
                            placeholder="User Name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <i className="bi bi-person placeHolderUserName"></i>
                    </div>
                    <div className="mb-3 pb-2">
                        <input
                            type="email"
                            className="form-control inputLogin"
                            id="emailInputRegister"
                            placeholder="Email "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <i className="bi bi-envelope placeHolderEmailRegister"></i>
                    </div>
                    <div className="mb-3 pb-2">
                        <input
                            type="password"
                            className="form-control inputLogin"
                            id="passwordInputRegister"
                            placeholder="Password "
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <i className="bi bi-eye-slash placeHolderPasswordRegister"></i>
                    </div>
                    <div className="mb-3 pb-4">
                        <input
                            type="password"
                            className="form-control inputLogin"
                            id="confirmPasswordInput"
                            placeholder="Confirm Password "
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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
                            Gender & Age
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
                                            I am
                                        </div>

                                        <label className="col-form-label postTitle">
                                            Gender :
                                        </label>
                                        <div className="radioGroup">
                                            <div className="woman">
                                                <input
                                                    type="radio"
                                                    className="btn-check"
                                                    name="options-outlined"
                                                    id="Woman"
                                                    autoComplete="off"
                                                    value="female"
                                                    onChange={(e) =>
                                                        setGender(
                                                            e.target.value
                                                        )
                                                    }
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
                                                    value="male"
                                                    onChange={(e) =>
                                                        setGender(
                                                            e.target.value
                                                        )
                                                    }
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
                                                    value="nonbinary"
                                                    onChange={(e) =>
                                                        setGender(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <label
                                                    className="btn btn-outline-danger"
                                                    htmlFor="Other"
                                                >
                                                    Other
                                                </label>
                                            </div>
                                        </div>

                                        {/* Age */}
                                        <label
                                            htmlFor="ageInputRegister"
                                            className="col-form-label postTitle"
                                        >
                                            Age :
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control inputRegister"
                                            placeholder="Input your age"
                                            style={{
                                                border: '1px solid #dc3545',
                                                height: '58px',
                                                borderRadius: '15px',
                                            }}
                                            id="ageInputRegister"
                                            value={ageRegister}
                                            onChange={(e) =>
                                                setAgeRegister(e.target.value)
                                            }
                                        />

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
                                                onChange={handleFileInputChange}
                                            />
                                            <img
                                                src={
                                                    imageUrl
                                                        ? imageUrl
                                                        : `https://res.cloudinary.com/dbtlgaii3/image/upload/v1644336153/Gift/Profile_avatar_placeholder_large_tafrpo.png`
                                                }
                                                alt="ProfileImg"
                                                role="button"
                                                onClick={() =>
                                                    inputEl.current.click()
                                                }
                                            />
                                        </div>

                                        {loading ? (
                                            <button
                                                type="button"
                                                className="btn btn-danger modalSubmitButton"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                                data-bs-toggle="modal"
                                                data-bs-target="#InterestModal"
                                                disabled
                                            >
                                                Continue
                                            </button>
                                        ) : (
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
                                        )}
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

                                        <Select
                                            isMulti
                                            name="interest"
                                            options={interestOption}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                            onChange={handleChange}
                                        />

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
