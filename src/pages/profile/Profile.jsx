import axios from '../../config/axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditProfileForm from '../../components/Profile/editprofileform/EditProfileForm';
import ProfileHeader from '../../components/Profile/profileheader/ProfileHeader';
import './profile.css';
import PostCard from '../../components/post/postcard/PostCard';
import { PostContext } from '../../contexts/PostContext';
import { AuthContext } from '../../contexts/AuthContext';

function Profile() {
    const { fetchPost, post } = useContext(PostContext);
    const { user } = useContext(AuthContext);
    const [person, setPerson] = useState({});
    const { username } = useParams();

    // Fetch User Data
    const fetchUser = async () => {
        const res = await axios.get(`/user/${username}`);
        setPerson(res.data.user);
    };
    useEffect(() => {
        fetchUser();
        fetchPost(username);
    }, [username]);

    if (!person.About || !post) {
        return <></>;
    }
    return (
        <div className="profile">
            <ProfileHeader person={person} />
            <EditProfileForm
                person={person}
                setPerson={setPerson}
                username={username}
            />
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    padding: '10px',
                }}
            >
                {post.map((item) => {
                    return <PostCard item={item} key={item.id} />;
                })}
            </div>
        </div>
    );
}

export default Profile;
