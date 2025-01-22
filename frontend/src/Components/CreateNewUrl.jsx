import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addURL, deleteURL } from "../redux/url/urlSlice";
// import "bootstrap";

function CreateNewUrl({ token }) {
  // const urls = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [originalUrl, setOriginalUrl] = useState("");
  const [receivedData, setreceivedData] = useState({});
  const [Action, setAction] = useState({
    loading: false,
    error: false,
    validUrl: true,
  });

  const isValidUrl = (urlString) => {
    let url;
    try {
      url = new URL(urlString);
    } catch (e) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  };

  const handleGenrateURL = async () => {
    setAction({ ...Action, validUrl: true });
    if (!isValidUrl(originalUrl)) {
      setAction({ ...Action, validUrl: isValidUrl(originalUrl) });
      return;
    }
    setAction({ loading: true, error: false });
    // console.log("token:", token);
    try {
      await axios
        .post(
          "https://url-shortener-git-main-ayush-jaiswals-projects-4a21fe3d.vercel.app/url/",
          {
            url: originalUrl,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          // console.log("res", res.data.newurl);
          dispatch(addURL(res.data.newurl));
          setreceivedData(res.data.newurl);
          setAction({ ...Action, ["loading"]: false });
          if (res.data.deletedURL !== "none") {
            dispatch(deleteURL(res.data.deletedURL));
          }
        })
        .catch((err) => {
          console.log("err", err);
          setAction({ loading: false, error: true });
        });
    } catch (error) {
      console.log("error", error);
      setAction({ loading: false, error: true });
    }
  };

  const handleInput = (e) => {
    setOriginalUrl(e.target.value);
  };

  return (
    <div>
      {/* {console.log(urls)} */}
      <h3>Redirect new URL</h3>
      <label htmlFor="original-url">Original URL</label>
      <div className="input-wrapper">
        <input
          id="original-url"
          type="text"
          placeholder="https://example.com"
          value={originalUrl}
          onChange={handleInput}
        />
        <div
          className="create-btn"
          onClick={() => handleGenrateURL()}
          disabled={Action.loading}
        >
          {!Action.loading ? "Create" : "......"}
        </div>
      </div>
      {Object.keys(receivedData).length !== 0 ? (
        <>
          <h3>{`https://url-shortener-git-main-ayush-jaiswals-projects-4a21fe3d.vercel.app/url/${receivedData.shortID}`}</h3>
        </>
      ) : (
        ""
      )}
      {!Action.validUrl ? <p className="text-warning">url is not valid</p> : ""}
      {Action.error ? (
        <p className="text-warning">Error occurred. Try again.</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default CreateNewUrl;
