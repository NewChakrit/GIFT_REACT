import React from 'react';
import CardProfile from '../../components/Profile/cardprofile/CardProfile';
import './home.css';

function Home() {
    return (
        <div className="homePage">
            <div className="cardContainer">
                <CardProfile />
                <CardProfile />
                <CardProfile />
                <CardProfile />
                <CardProfile />
                <CardProfile />
                <CardProfile />
                <CardProfile />
                <CardProfile />
                <CardProfile />
            </div>
        </div>
    );
}

export default Home;
