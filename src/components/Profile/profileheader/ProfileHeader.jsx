import React from 'react';
import './profileheader.css';
import InterestCard from '../interestcard/InterestCard';
import ChangeProfilePicture from '../editprofileform/ChangeProfilePicture';
import ChangeCoverPicture from '../editprofileform/ChangeCoverPicture';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import PostForm from '../../post/postform/PostForm';
import { useNavigate } from 'react-router-dom';

function ProfileHeader({ person }) {
    const { coverUrl, imageUrl, user } = useContext(AuthContext);
    const interest = person.About.interest.split(',');

    const navigate = useNavigate();

    const handleClickOpenChat = async () => {
        navigate(`/messenger/${person.id}`);
    };

    return (
        <>
            <div
                className="coverPicture"
                data-bs-toggle={`${user.id === person.id ? 'modal' : ''}`}
                data-bs-target="#ChangeCoverImgModal"
            >
                <img
                    className="coverImg"
                    src={
                        coverUrl
                            ? coverUrl
                            : person.coverUrl
                            ? person.coverUrl
                            : `https://res.cloudinary.com/dbtlgaii3/image/upload/v1643775365/Beetalk/tbszddqddzpupxzyee2c.jpg`
                    }
                    alt="Cover Photo"
                />
            </div>
            <ChangeCoverPicture person={person} />
            <div className="profileHeader">
                <div className="profileDetail">
                    <div className="topProfileDetail">
                        <div
                            className="profilePicture"
                            data-bs-toggle={`${
                                user.id === person.id ? 'modal' : ''
                            }`}
                            data-bs-target="#ChangeProfileImgModal"
                        >
                            <img
                                className="profileImg"
                                src={imageUrl ? imageUrl : person.profileUrl}
                                alt="Profile Pigture"
                            />
                        </div>
                        <ChangeProfilePicture person={person} />

                        <div className="editProfile">
                            {user.username === person.username ? (
                                <>
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
                                </>
                            ) : (
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={handleClickOpenChat}
                                >
                                    <b>Chat</b>
                                </button>
                            )}
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
            <PostForm />
        </>
    );
}

export default ProfileHeader;
