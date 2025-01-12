import axios from "axios";
import React, { useState } from "react";

function CreateNewUrl({ token }) {
  const [originalUrl, setOriginalUrl] = useState("");
  const [receivedData, setreceivedData] = useState({});

  const handleGenrateURL = async () => {
    console.log("token:", token);
    try {
      await axios
        .post(
          "http://localhost:8000/url/",
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
          console.log("res", res.data);
          setreceivedData(res.data);
        })
        .catch((err) => {
          console.log("err", err);
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
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
        <button className="create-btn" onClick={() => handleGenrateURL()}>
          Create
        </button>
      </div>
      {Object.keys(receivedData).length !== 0 ? (
        <h3>{`http://localhost:8000/url/${receivedData.shortID}`}</h3>
      ) : (
        ""
      )}
    </div>
  );
}

export default CreateNewUrl;
