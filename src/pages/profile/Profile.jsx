import axios from '../../config/axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditProfileForm from '../../components/Profile/editprofileform/EditProfileForm';
import ProfileHeader from '../../components/Profile/profileheader/ProfileHeader';
import './profile.css';

function Profile() {
    const [person, setPerson] = useState({});
    const { username } = useParams();

    // Fetch User Data
    const fetchUser = async () => {
        const res = await axios.get(`/user/${username}`);
        setPerson(res.data.user);
    };
    useEffect(() => {
        fetchUser();
    }, [username]);

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
