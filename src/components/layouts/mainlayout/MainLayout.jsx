import React from 'react';
import { Outlet } from 'react-router-dom';
import './mainlayout.css';
import Header from './header/Header';

function MainLayout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

export default MainLayout;
