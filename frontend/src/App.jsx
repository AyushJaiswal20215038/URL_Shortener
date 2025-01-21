import "./App.css";
import navbar from "./Components/Navbar";
import FunctionalityPage from "./screen/Funtionality";
import HomePage from "./screen/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "./screen/Login";
import SignUpPage from "./screen/SignUp";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
function App() {
  const [IsServerReachble, setIsServerReachble] = useState(false);

  useEffect(() => {
    let interval;
    const toastID = toast.warning(
      "Wait here for a while .It may take around 2 mins to start the server.",
      {
        autoClose: false,
      }
    );
    const handleCheckServer = async () => {
      try {
        await axios
          .get("http://localhost:8000/test", {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            if (res.data.msg === "Server is ON") {
              setIsServerReachble(true);
              clearInterval(interval);
              console.log("Server OK");
              toast.dismiss();
              toast.success("Connection Established");
            }
            console.log(res.data.msg);
          })
          .catch((error) => {
            console.log("error");
          });
      } catch (error) {
        console.log("err");
      }
    };

    handleCheckServer();
    interval = setInterval(handleCheckServer, 10000);

    return () => clearInterval(interval);
    // refreshLogs();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/shortURL" element={<FunctionalityPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
