// Import necessary libraries
import React, { useEffect, useState } from "react";

// Import styles (CSS file or styled-components can be used)
import "./HomePage.css";
import { useNavigate } from "react-router";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";

const HomePage = () => {
  const navigate = useNavigate();
  let token = sessionStorage.getItem("token") || "";

  return (
    <div className="homepage">
      {/* Navbar */}
      <Navbar />
      <div className="content">
        {/* Hero Section */}
        <header className="hero-section">
          <h1>
            Make Your <em>Links</em> <br />
            Smarter, Not <br />
            Longer
          </h1>
          <button
            className="get-started-btn"
            onClick={() => navigate(token.length ? "/shortURL" : "/login")}
          >
            Get Started
          </button>
        </header>

        {/* Image Section */}
        <section className="image-section">
          <div className="image-item">
            <p>
              Welcome to our powerful and easy-to-use URL shortener tool!
              Whether you're sharing links on social media, in emails, or for
              business purposes, our service ensures that your long URLs become
              compact, memorable, and easy to manage.
            </p>
          </div>
        </section>
        <section>
          <h2>Why Use Our URL Shortener?</h2>
          <ul>
            <li>
              <strong>Save Space</strong>: Transform long URLs into short,
              user-friendly links that fit perfectly into posts, messages, and
              more.
            </li>
            <li>
              <strong>Easy Sharing</strong>: Short links are easier to copy,
              share, and track. Perfect for digital marketing, email campaigns,
              and more.
            </li>
            <li>
              <strong>Track Performance</strong>: Monitor how your links are
              performing with our built-in analytics. See how many clicks your
              link receives, where they're coming from, and more!
            </li>
            <li>
              <strong>Customizable Links</strong>: Create branded and customized
              short URLs that align with your brand, ensuring your links look
              professional and trustworthy.
            </li>
            <li>
              <strong>Free & Fast</strong>: Get started instantly without any
              hidden fees. Our tool is fast, efficient, and free for basic
              usage.
            </li>
          </ul>
        </section>
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
