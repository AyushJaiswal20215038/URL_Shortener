import React, { useState } from "react";
import "./Login.css"; // Add your styles here or inline
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPage = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [Loading, setLoading] = useState(false);

  const handlechange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(details);
    setLoading(true);
    try {
      await axios
        .post("http://localhost:8000/user/signin", details)
        .then((res) => {
          // console.log(res);
          if (res.data.msg === "Signed In Successfully") {
            sessionStorage.setItem("token", res.data.token);
            toast.success(res.data.msg);
            setLoading(false);
            navigate("/");
          } else {
            toast.error(res.data.msg);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err.code.split("ERR_")[1]);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
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
            <h2>Sign In</h2>
          </header>
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
            disabled={Loading}
          >
            {!Loading ? "Submit" : "......"}
          </button>
        </form>
        <p>
          Don’t have an account?{" "}
          <Link to="/signup" className="signup-link">
            Sign Up Here
          </Link>
        </p>
      </main>
    </div>
  );
};

export default LoginPage;
