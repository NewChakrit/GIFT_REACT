import React from "react";
import { Outlet } from "react-router-dom";
import "./mainlayout.css";
import Header from "./header/Header";
import { motion } from "framer-motion";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext } from "react";

function MainLayout() {
  const { setLoginLoading } = useContext(AuthContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
    >
      <Header />
      <Outlet />
    </motion.div>
  );
}

export default MainLayout;
