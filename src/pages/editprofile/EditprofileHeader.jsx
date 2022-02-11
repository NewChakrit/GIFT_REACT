import React from 'react';

function EditprofileHeader() {
    return (
        <div className="main-header fixed-top">
            <div className="header-left">
                <i className="bi bi-arrow-left"></i>
            </div>
            <div>
                <h2 className="header-name">Edit Profile</h2>
            </div>
            <div className="header-right">
                <i className="bi bi-save"> Save</i>
            </div>
        </div>
    );
}

export default EditprofileHeader;
