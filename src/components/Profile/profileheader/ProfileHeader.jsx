import axios from '../../../config/axios';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import './profileheader.css';
import { useState } from 'react';
import InterestCard from '../interestcard/InterestCard';
import ChangeProfilePicture from '../editprofileform/ChangeProfilePicture';

function ProfileHeader({ person }) {
    const interest = person.About.interest.split(',');

    return (
        <>
            <div className="coverPicture">
                <img
                    className="coverImg"
                    src="https://res.cloudinary.com/dbtlgaii3/image/upload/v1643775365/Beetalk/tbszddqddzpupxzyee2c.jpg"
                    alt="Cover Photo"
                />
            </div>
            <div className="profileHeader">
                <div className="profileDetail">
                    <div className="topProfileDetail">
                        <div
                            className="profilePicture"
                            data-bs-toggle="modal"
                            data-bs-target="#ChangeProfileImgModal"
                        >
                            <img
                                className="profileImg"
                                src={person.profileUrl}
                                alt="Profile Pigture"
                            />
                        </div>
                        <ChangeProfilePicture />

                        <div className="editProfile">
                            <button
                                type="button"
                                className="btn"
                                data-bs-toggle="modal"
                                data-bs-target="#EditProfileModal"
                            >
                                <b>Edit Profile</b>
                            </button>
                            <button
                                className="btn"
                                data-bs-toggle="modal"
                                data-bs-target="#PostModal"
                            >
                                <b>
                                    <i className="bi bi-pencil-square"></i>
                                </b>
                            </button>
                        </div>
                    </div>
                    <div className="profileDetailContent">
                        <div className="username">
                            <strong>{person.username}</strong>
                        </div>
                        <div className="aboutme">
                            {/* <button
                                className="d-flex "
                                style={{ backgroundColor: '#F6CCD6' }}
                            >
                                <i className="bi bi-gender-ambiguous"></i>
                                <div>
                                    <b>Female</b>
                                </div>
                            </button>
                            <button
                                className="d-flex"
                                style={{ backgroundColor: '#F6CCD6' }}
                            >
                                <div>
                                    <b>Age : 26</b>
                                </div>
                            </button> */}
                            {interest.map((item, i) => {
                                return <InterestCard item={item} key={i} />;
                            })}
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="caption">
                                {person.About.caption}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tabButton">Post</div>
            </div>
        </>
    );
}

export default ProfileHeader;
