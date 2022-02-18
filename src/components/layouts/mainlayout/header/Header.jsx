import "./Header.css";
import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LogOutForm from "../../../logoutform/LogoutForm";
import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import axios from "../../../../config/axios";
import { useState } from "react";
import { ChatContext } from "../../../../contexts/ChatContext";

function Header() {
  const { user } = useContext(AuthContext);
  const { toggledelete, setToggledelete } = useContext(ChatContext);
  const { username, id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [usernameHeader, setUsernameHeader] = useState("");

  const fetchUsername = async () => {
    const res = await axios.get(`/user/me/${id}`);
    setUsernameHeader(res.data.user?.username);
  };
  useEffect(() => {
    fetchUsername();
  }, [id]);

  return (
    <>
      <div className="main-header fixed-top">
        <div className="header-left" onClick={() => navigate("/messenger")}>
          {location.pathname.includes("/messenger/") ? (
            <h2 className="header-profile">
              <i className="bi bi-arrow-left"></i>
            </h2>
          ) : (
            <></>
          )}
        </div>
        <div>
          {location.pathname === "/" ? (
            <h2 className="header-name">Discover</h2>
          ) : location.pathname.includes("/profile") ? (
            <h2 className="header-profile">Profile details</h2>
          ) : location.pathname.includes("/messenger/") ? (
            <h2 className="header-profile">{usernameHeader}</h2>
          ) : location.pathname === "/messenger" ? (
            <h2 className="header-profile">message</h2>
          ) : location.pathname === "/search" ? (
            <h2 className="header-profile">Map</h2>
          ) : (
            <></>
          )}
        </div>
        <div className="header-right">
          {location.pathname === "/" ? (
            <button className="btn">
              <i className="bi bi-sliders2"></i>
            </button>
          ) : location.pathname.includes("/profile") ? (
            user.username === username ? (
              <button
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#LogoutModal"
              >
                <i className="bi bi-box-arrow-right"></i>
              </button>
            ) : (
              <></>
            )
          ) : location.pathname.includes("/messenger") ? (
            <button
              className="btn"
              data-bs-toggle="modal"
              data-bs-target="#PostModal"
              onClick={() => setToggledelete(!toggledelete)}
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
