import React from 'react';
import { Outlet } from 'react-router-dom';
import './mainlayout.css';

function MainLayout() {
    return (
        <div>
            <h1>MainLayout</h1>
            <Outlet />
        </div>
    );
}

export default MainLayout;
