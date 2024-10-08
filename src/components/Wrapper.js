// src/components/Wrapper.js
import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Wrapper = ({ children, showPreloader, loading }) => {
  const location = useLocation();
  // List of routes where the navbar and footer should not be displayed
  const paths = [
    "/admin/dashboard",
    "/login",
    "/signup",
    "/verify-email",
    "/admin/profile",
    "post/:postId"
  ];

  // Check if the current path is in the excluded paths
  const showNavbarAndFooter = !paths.includes(location.pathname.toLowerCase());

  return (
    <>
      {!showPreloader && !loading && showNavbarAndFooter && <Navbar />}
      {children}
      {!showPreloader && !loading && showNavbarAndFooter && <Footer />}
    </>
  );
};

export default Wrapper;
