// Import necessary libraries
import React, { useState } from "react";

import "./FunctionalityPage.css";

const FunctionalityPage = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [urls, setUrls] = useState([]);
  const [logs, setLogs] = useState([]);

  return (
    <div className="functionality-page">
      <nav className="navbar">
        <div className="logo">URLShortner</div>
        <button className="logout-btn">Logout</button>
      </nav>

      {/* Main Section */}
      <main className="main-section">
        {/* URLs Section */}
        <div className="urls-section">
          <h2>Your URLs</h2>
          <div className="urls-list">
            {urls.length > 0 ? (
              urls.map((url, index) => (
                <div key={index} className="url-item">
                  <p>Original: {url.original}</p>
                  <p>
                    Shortened: <a href={url.short}>{url.short}</a>
                  </p>
                </div>
              ))
            ) : (
              <p>No URLs yet.</p>
            )}
          </div>
        </div>

        <div className="logs-section">
          <h2>Logs</h2>
          <div className="logs-list">
            {logs.length > 0 ? (
              logs.map((log, index) => <p key={index}>{log}</p>)
            ) : (
              <p>No logs yet.</p>
            )}
          </div>
        </div>
      </main>

      <section className="input-section">
        <h3>Redirect new URL</h3>
        <label htmlFor="original-url">Original URL</label>
        <div className="input-wrapper">
          <input
            id="original-url"
            type="text"
            placeholder="https://example.com"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
          />
          <button className="create-btn" onClick={(e) => console.log(e)}>
            Create
          </button>
        </div>
      </section>

      <footer className="footer">Footer</footer>
    </div>
  );
};

export default FunctionalityPage;
