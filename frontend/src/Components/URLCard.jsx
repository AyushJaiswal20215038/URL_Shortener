import React from "react";
import { Link } from "react-router";

const URLCard = ({ url }) => {
  return (
    <div class="card url-item">
      <div class="card-body">
        <h5 class="card-title">Original: {url.redirectURL}</h5>
        <p class="card-text">
          Shortened:{" "}
          <Link
            to={`http://localhost:8000/url/${url.shortID}`}
          >{`http://localhost:8000/url/${url.shortID}`}</Link>
        </p>
      </div>
    </div>
  );
};

export default URLCard;
