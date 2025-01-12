import React, { useState } from "react";
import "./Login.css"; // Add your styles here or inline
import { Link, useNavigate } from "react-router";
import axios from "axios";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(details);
    try {
      await axios
        .post("http://localhost:8000/user/signup", details)
        .then((res) => {
          if (res.data.msg === "User Added Successfully") navigate("/login");
          else console.log(res);
        })
        .catch((err) => {
          console.log(err.code.split("ERR_")[1]);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <header>
        <h1>
          <span onClick={() => navigate("/")}>URLShortner</span>
        </h1>
      </header>
      <main>
        <form>
          <header>
            <h2>Sign Up</h2>
          </header>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="nameHelp"
              placeholder="Enter your name"
              name="name"
              value={details.name}
              onChange={handlechange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              name="email"
              value={details.email}
              onChange={handlechange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your password"
              name="password"
              value={details.password}
              onChange={handlechange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="signup-link">
            Login Here
          </Link>
        </p>
      </main>
    </div>
  );
};

export default SignUpPage;
