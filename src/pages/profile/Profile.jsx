import axios from '../../config/axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditProfileForm from '../../components/Profile/editprofileform/EditProfileForm';
import ProfileHeader from '../../components/Profile/profileheader/ProfileHeader';
import './profile.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Profile() {
    // const { imageUrl, coverUrl } = useContext(AuthContext);
    const [person, setPerson] = useState({});
    const { username } = useParams();

    // Fetch User Data
    const fetchUser = async () => {
        const res = await axios.get(`/user/${username}`);
        setPerson(res.data.user);
    };
    useEffect(() => {
        fetchUser();
    }, [username, person]);

    // //Fetch Post
    // useEffect(() => {
    //     fetchPost(username);
    // }, [username]);

    if (!person.About) {
        return <></>;
    }
    return (
        <div className="profile">
            <ProfileHeader person={person} />
            <EditProfileForm />
        </div>
    );
}

export default Profile;
