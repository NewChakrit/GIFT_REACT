import "./Header.css";
import React from "react";

function Header() {
  return (
    <div className="main-header">
      <div className="header-left"></div>
      <div>
        <h2 className="header-name">Discover</h2>
      </div>
      <div className="header-right">
        <i class="bi bi-sliders2"></i>
      </div>
    </div>
  );
}

export default Header;
