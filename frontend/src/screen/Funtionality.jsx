// Import necessary libraries
import React, { useState } from "react";

import "./FunctionalityPage.css";

import Navbar from "../Components/Navbar";
import CreateNewUrl from "../Components/CreateNewUrl";
import AllUrls from "../Components/AllUrls";
import Logs from "../Components/Logs";

const FunctionalityPage = () => {
  return (
    <div className="functionality-page">
      <Navbar />
      {/* Main Section */}
      <main className="main-section">
        {/* URLs Section */}
        <AllUrls />

        <Logs />
      </main>

      <section className="input-section">
        <CreateNewUrl />
      </section>

      <footer className="footer">Footer</footer>
    </div>
  );
};

export default FunctionalityPage;
