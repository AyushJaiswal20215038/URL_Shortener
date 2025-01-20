import React from "react";
import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { deleteURL } from "../redux/url/urlSlice";
import axios from "axios";

const URLCard = ({ url }) => {
  let token = sessionStorage.getItem("token");
  const dispatch = useDispatch();
  const handleDelete = async (url) => {
    try {
      await axios
        .delete(`http://localhost:8000/url/modifyurl/${url._id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          dispatch(deleteURL(url._id));
          console.log("resdelete", res);
        })
        .catch((err) => {
          console.log("err", err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card url-item">
      <div className="card-body">
        <h5 className="card-title url-title">
          Original: {url.redirectURL}
          <span onClick={() => handleDelete(url)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
            </svg>
          </span>
        </h5>
        <p className="card-text">
          Shortened:{" "}
          <Link
            to={`http://localhost:8000/url/${url.shortID}`}
          >{`http://localhost:8000/url/${url.shortID}`}</Link>
        </p>
      </div>
    </div>
  );
};

export default URLCard;
