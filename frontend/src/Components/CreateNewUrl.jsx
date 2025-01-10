import React, { useState } from "react";

function CreateNewUrl() {
  const [originalUrl, setOriginalUrl] = useState("");

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
        <button className="create-btn" onClick={(e) => console.log(e)}>
          Create
        </button>
      </div>
    </div>
  );
}

export default CreateNewUrl;
