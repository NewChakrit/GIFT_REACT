import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPreciseDistance } from 'geolib';
import { AuthContext } from '../../../contexts/AuthContext';
import axios from '../../../config/axios';
import timeSince from '../../../services/timeSince';
import './cardprofile.css';

function CardProfile({ item }) {
    const { user } = useContext(AuthContext);
    const [myUserData, setMyUserData] = useState(null);
    const [otherUserData, setOtherUserData] = useState(null);
    const [distance, setDistance] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate();

    // location
    useEffect(() => {
        const time = setInterval(() => {
            navigator.geolocation.getCurrentPosition(async (pos) => {
                try {
                    setRefresh((prev) => !prev);
                    if (pos.coords.latitude || pos.coords.longitude) {
                        await axios.put(`/about/location/${user.id}`, {
                            latitude: pos.coords.latitude,
                            longitude: pos.coords.longitude,
                        });
                    }
                } catch (err) {
                    console.log(err.message);
                }
            });
        }, 3000);
        return () => {
            clearInterval(time);
        };
    }, []);

    const fetchMyData = async () => {
        try {
            const res = await axios.get(`/user/me/${user.id}`);
            setMyUserData(res.data.user);
        } catch (err) {
            console.log(err.message);
        }
    };

    const fetchOtherUserData = async () => {
        try {
            const res = await axios.get(`/user/me/${item.id}`);
            setOtherUserData(res.data.user);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        fetchMyData();
        fetchOtherUserData();
    }, []);

    useEffect(() => {
        fetchMyData();
        fetchOtherUserData();
        calculatePreciseDistance();
    }, [refresh]);

    // calc distance
    function calculatePreciseDistance() {
        if (!myUserData || !otherUserData || !myUserData.About.latitude) {
            return;
        }
        const pdis = getPreciseDistance(
            {
                latitude: myUserData.About.latitude,
                longitude: myUserData.About.longitude,
            },
            {
                latitude: otherUserData.About.latitude,
                longitude: otherUserData.About.longitude,
            }
        );
        setDistance(pdis);
    }

    if (!myUserData || !otherUserData) {
        return <></>;
    }

    return (
        <div
            className="profileCard"
            onClick={() => navigate(`/profile/${item.username}`)}
        >
            <div className="profileCardImg">
                <img
                    className="cardImg"
                    src={item.profileUrl}
                    alt="profileImg"
                />
            </div>
            <div className="cardDetailContainer">
                <div className="cardNameAndLocation">
                    <p className="cardName">{item.username}</p>
                    {!distance ? (
                        <div
                            className="spinner-grow text-secondary"
                            role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <p className="cardLocation">
                            {distance > 1000
                                ? (distance / 1000).toFixed(1) + ' ' + 'km'
                                : distance + ' ' + 'm'}{' '}
                            | {timeSince(otherUserData.About.updatedAt)}
                        </p>
                    )}
                </div>
                <div className="cardProfileCaption">
                    {item?.About?.caption?.length > 20
                        ? item?.About?.caption?.slice(0, 20) + '...'
                        : item?.About?.caption}
                </div>
            </div>
        </div>
    );
}

export default CardProfile;
