import './Header.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import LogOutForm from '../../../logoutform/LogoutForm';

function Header() {
    const location = useLocation();

    return (
        <>
            <div className="main-header fixed-top">
                <div className="header-left">
                    {location.pathname.includes('/chat') ? (
                        <h2 className="header-profile">
                            <i className="bi bi-arrow-left"></i>
                        </h2>
                    ) : (
                        <></>
                    )}
                </div>
                <div>
                    {location.pathname === '/' ? (
                        <h2 className="header-name">Discover</h2>
                    ) : location.pathname.includes('/profile') ? (
                        <h2 className="header-profile">Profile details</h2>
                    ) : location.pathname.includes('/chat') ? (
                        <h2 className="header-profile">Nahee</h2>
                    ) : location.pathname.includes('/messenger') ? (
                        <h2 className="header-profile">message</h2>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="header-right">
                    {location.pathname === '/' ? (
                        <button className="btn">
                            <i className="bi bi-sliders2"></i>
                        </button>
                    ) : location.pathname.includes('/profile') ? (
                        <button
                            className="btn"
                            data-bs-toggle="modal"
                            data-bs-target="#LogoutModal"
                        >
                            <i className="bi bi-box-arrow-right"></i>
                        </button>
                    ) : location.pathname.includes('/messenger') ? (
                        <button
                            className="btn"
                            data-bs-toggle="modal"
                            data-bs-target="#PostModal"
                        >
                            <b>
                                <i className="bi bi-pencil-square"></i>
                            </b>
                        </button>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            <LogOutForm />
        </>
    );
}

export default Header;
