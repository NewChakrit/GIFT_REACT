import React from 'react';
import './cardprofile.css';

function CardProfile() {
    return (
        <div className="profileCard">
            <div className="profileCardImg">
                <img
                    className="cardImg"
                    src="https://res.cloudinary.com/dbtlgaii3/image/upload/v1644400849/Gift/ufdu6jpnnx6hx47nezo1.jpg"
                    alt="profileImg"
                />
            </div>
            <div className="cardDetailContainer">
                <div className="cardNameAndLocation">
                    <p className="cardName">Jane</p>
                    <p className="cardLocation">2m | 2 min ago</p>
                </div>
                <div className="cardProfileCaption">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, possimus.
                </div>
            </div>
        </div>
    );
}

export default CardProfile;
