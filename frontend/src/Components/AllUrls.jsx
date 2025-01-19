import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import URLCard from "./URLCard";
import { useSelector, useDispatch } from "react-redux";
import { getURL } from "../redux/url/urlSlice";

function AllUrls({ token }) {
  // const [allurls, setAllURLs] = useState([]);
  const dispatch = useDispatch();
  const allurls = useSelector((state) => state.counter.value);

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
          // setAllURLs(res.data.analytics);
          dispatch(getURL(res.data.analytics));
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
        <div className="url-content">
          <h2>Your URLs</h2>
          <div className="urls-list">
            {allurls.length > 0 ? (
              allurls.map((url, index) => <URLCard key={index} url={url} />)
            ) : (
              <p>No URLs yet.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllUrls;
