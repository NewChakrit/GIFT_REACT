import "./Header.css";
import React from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <div className="main-header fixed-top">
      <div className="header-left"></div>
      <div>
        {location.pathname === "/" ? (
          <h2 className="header-name">Discover</h2>
        ) : location.pathname.includes("/profile") ? (
          <h2 className="header-profile">Profile details</h2>
        ) : (
          <></>
        )}
      </div>
      <div className="header-right">
        {location.pathname === "/" ? (
          <i className="bi bi-sliders2"></i>
        ) : location.pathname.includes("/profile") ? (
          <i className="bi bi-box-arrow-right"></i>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Header;
