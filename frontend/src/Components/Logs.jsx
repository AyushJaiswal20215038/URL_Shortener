import React, { useState } from "react";

function Logs() {
  const [logs, setLogs] = useState([]);
  return (
    <>
      <div className="logs-section">
        <h2>Logs</h2>
        <div className="logs-list">
          {logs.length > 0 ? (
            logs.map((log, index) => <p key={index}>{log}</p>)
          ) : (
            <p>No logs yet.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Logs;
