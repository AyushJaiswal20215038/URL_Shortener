import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

function AllUrls({ token }) {
  const [allurls, setAllURLs] = useState([]);

  const handleGetURL = async () => {
    // console.log("token:", token);
    try {
      await axios
        .get("http://localhost:8000/url/analytics/allurls", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          console.log("res", res.data);
          setAllURLs(res.data.analytics);
        })
        .catch((err) => {
          console.log("err", err);
        });
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    handleGetURL();
  }, []);
  return (
    <>
      {console.log(allurls)}
      <div className="urls-section">
        <h2>Your URLs</h2>
        <div className="urls-list">
          {allurls.length > 0 ? (
            allurls.map((url, index) => (
              <div key={index} className="url-item">
                <p>Original: {url.redirectURL}</p>
                <p>
                  Shortened:{" "}
                  <Link
                    to={`http://localhost:8000/url/${url.shortID}`}
                  >{`http://localhost:8000/url/${url.shortID}`}</Link>
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
