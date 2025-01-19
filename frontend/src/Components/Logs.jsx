import axios from "axios";
import React, { useEffect, useState } from "react";
import LogCard from "./LogCard";

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
    let interval = setInterval(handleGetLogs, 300000);
    return () => clearInterval(interval);
    // refreshLogs();
  }, [token]);

  return (
    <>
      <div className="logs-section">
        <div className="log-content">
          <h2>Logs</h2>
          <div className="logs-list">
            {console.log("logs", logs)}
            {logs.length !== 0 ? (
              logs.map((log, index) => <LogCard key={index} log={log} />)
            ) : (
              <p>No logs yet.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Logs;
