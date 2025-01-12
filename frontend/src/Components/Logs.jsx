import axios from "axios";
import React, { useEffect, useState } from "react";

function Logs({ token }) {
  const [logs, setLogs] = useState([]);

  const handleGetLogs = async () => {
    // console.log("token:", token);
    try {
      await axios
        .get("http://localhost:8000/url/analytics/record", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          console.log("res", res.data);
          setLogs(res.data.logs);
        })
        .catch((err) => {
          console.log("err", err);
        });
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    handleGetLogs();
  }, [token]);

  return (
    <>
      <div className="logs-section">
        <h2>Logs</h2>
        <div className="logs-list">
          {console.log("logs", logs)}
          {logs.length !== 0 ? (
            logs.map((log, index) => (
              <p key={index}>
                {Date(log.timestamp)}-- http://localhost:8000/url/{log.shortID}{" "}
                --{log.redirectURL}
              </p>
            ))
          ) : (
            <p>No logs yet.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Logs;
