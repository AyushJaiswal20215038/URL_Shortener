import React, { useState } from "react";

function AllUrls() {
  const [urls, setUrls] = useState([]);

  return (
    <>
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
    </>
  );
}

export default AllUrls;
