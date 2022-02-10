import React from "react";
import { Outlet } from "react-router-dom";
import "./mainlayout.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function MainLayout() {
  return (
    <div>
      <Header />

      <h1>MainLayout</h1>
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
