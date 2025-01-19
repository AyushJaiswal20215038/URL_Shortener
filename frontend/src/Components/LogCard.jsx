import React from "react";

const LogCard = ({ log }) => {
  const date = new Date(log.timestamp);

  return (
    <div className="card url-item">
      <div className="card-body">
        <h5 className="card-title">{date.toString()}:</h5>
        <p className="card-text">
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
