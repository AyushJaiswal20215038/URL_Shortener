import React from "react";

const LogCard = ({ log }) => {
  const date = new Date(log.timestamp);

  return (
    <div className="card url-item">
      <div className="card-body">
        <h5 className="card-title">{date.toString()}:</h5>
        <p className="card-text">
          ShortURL:
          https://url-shortener-git-main-ayush-jaiswals-projects-4a21fe3d.vercel.app/url/
          {log.shortID}
          <br />
          Original: {log.redirectURL}
        </p>
      </div>
    </div>
  );
};

export default LogCard;
