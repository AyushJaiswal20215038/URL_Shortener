import "./App.css";
import navbar from "./Components/Navbar";
import FunctionalityPage from "./screen/Funtionality";
import HomePage from "./screen/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "./screen/Login";
import SignUpPage from "./screen/SignUp";
function App() {
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
