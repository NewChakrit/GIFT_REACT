import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import MainLayout from '../components/layouts/mainlayout/MainLayout';
import Login from '../components/auths/login/Login';
import Register from '../components/auths/register/Register';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Footer from '../components/layouts/mainlayout/footer/Footer';
import Profile from '../pages/profile/Profile';
import Messenger from '../pages/messenger/Messenger';
import UserContextProvider from '../contexts/UserContext';
import PostContextProvider from '../contexts/PostContext';
import Chat from '../pages/chat/Chat';
import ChatContextProvider from '../contexts/ChatContext';
import SocketContextProvider from '../contexts/SocketContext';

const routes = {
    guest: [
        { path: '/', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '*', element: <Navigate to="/" replace={true} /> },
    ],
    user: [
        { path: '/', element: <Home /> },
        { path: '/profile/:username', element: <Profile /> },
        { path: '/messenger', element: <Messenger /> },
        { path: '/messenger/:id', element: <Chat /> },
        { path: '*', element: <Navigate to="/" replace={true} /> },
    ],
};

function RouteConfig() {
    const { user, role } = useContext(AuthContext);

    if (role == 'user' && !user) {
        return (
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }

    return (
        <>
            {role === 'user' ? (
                <>
                    <UserContextProvider>
                        <PostContextProvider>
                            <SocketContextProvider>
                                <ChatContextProvider>
                                    <Routes>
                                        <Route
                                            path="/"
                                            element={<MainLayout />}
                                        >
                                            {routes[role].map((item) => (
                                                <Route
                                                    path={item.path}
                                                    element={item.element}
                                                    key={item.path}
                                                />
                                            ))}
                                        </Route>
                                    </Routes>
                                </ChatContextProvider>
                            </SocketContextProvider>
                            <Footer />
                        </PostContextProvider>
                    </UserContextProvider>
                </>
            ) : (
                <Routes>
                    {routes[role].map((item) => (
                        <Route
                            path={item.path}
                            element={item.element}
                            key={item.path}
                        />
                    ))}
                </Routes>
            )}
        </>
    );
}

export default RouteConfig;
