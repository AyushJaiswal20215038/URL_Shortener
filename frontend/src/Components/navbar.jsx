import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <div className="logo" onClick={() => navigate("/")}>
          URLShortner
        </div>
        <button className="login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
      </nav>
    </>
  );
};

export default Navbar;
