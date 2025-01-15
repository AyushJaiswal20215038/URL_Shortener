// Import necessary libraries
import React, { useEffect, useState } from "react";

import "./FunctionalityPage.css";

import Navbar from "../Components/navbar";
import CreateNewUrl from "../Components/CreateNewUrl";
import AllUrls from "../Components/AllUrls";
import Logs from "../Components/Logs";
import axios from "axios";
import { useNavigate } from "react-router";
import Footer from "../Components/Footer";

const FunctionalityPage = () => {
  let token = sessionStorage.getItem("token") || "";
  const navigate = useNavigate();

  useEffect(() => {
    if (!token.length) navigate("/login");
  }, []);

  return (
    <div className="functionality-page">
      <Navbar />
      {/* Main Section */}
      <main className="main-section">
        {/* URLs Section */}
        <AllUrls token={token} />

        <Logs token={token} />
      </main>

      <section className="input-section">
        <CreateNewUrl token={token} />
      </section>

      <Footer />
    </div>
  );
};

export default FunctionalityPage;
