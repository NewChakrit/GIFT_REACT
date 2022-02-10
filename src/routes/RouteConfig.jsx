import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../components/layouts/mainlayout/MainLayout";
import Login from "../components/auths/login/Login";
import Register from "../components/auths/register/Register";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Footer from "../components/layouts/mainlayout/footer/Footer";
import Profile from "../pages/profile/Profile";
import Messenger from "../pages/messenger/Messenger";
import UserContextProvider from "../contexts/UserContext";

const routes = {
  guest: [
    { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "*", element: <Navigate to="/" replace={true} /> },
  ],
  user: [
    { path: "/", element: <Home /> },
    { path: "/profile", element: <Profile /> },
    { path: "/messenger", element: <Messenger /> },

    { path: "*", element: <Navigate to="/" replace={true} /> },
  ],
};
function RouteConfig() {
  const { user, role } = useContext(AuthContext);

  if (role === "user" && !user) {
    return (
      <>
        {role === "user" ? (
          <>
            <UserContextProvider>
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  {routes[role].map((item) => (
                    <Route
                      path={item.path}
                      element={item.element}
                      key={item.path}
                    />
                  ))}
                </Route>
              </Routes>
              <Footer />
            </UserContextProvider>
          </>
        ) : (
          <Routes>
            {routes[role].map((item) => (
              <Route path={item.path} element={item.element} key={item.path} />
            ))}
          </Routes>
        )}
      </>
    );
  }
}

export default RouteConfig;
