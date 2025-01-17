import React from "react";

const LogCard = ({ log }) => {
  return (
    <div class="card url-item">
      <div class="card-body">
        <h5 class="card-title">{Date(log.timestamp)}:</h5>
        <p class="card-text">
          ShortURL: http://localhost:8000/url/
          {log.shortID}
          <br />
          {log.redirectURL}
        </p>
      </div>
    </div>
  );
};

export default LogCard;
