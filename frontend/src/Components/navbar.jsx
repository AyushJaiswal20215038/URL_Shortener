import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  let token = sessionStorage.getItem("token") || "";
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <nav className="navbar">
        <div className="logo" onClick={() => navigate("/")}>
          URLShortner
        </div>
        {token.length === 0 ? (
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        ) : (
          <button className="login-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav>
    </>
  );
};

export default Navbar;
