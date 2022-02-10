import React from 'react';
import EditProfileForm from '../../components/Profile/editprofileform/EditProfileForm';
import ProfileHeader from '../../components/Profile/profileheader/ProfileHeader';
import './profile.css';

function Profile() {
    return (
        <div className="profile">
            <ProfileHeader />
            <EditProfileForm />
        </div>
    );
}

export default Profile;
