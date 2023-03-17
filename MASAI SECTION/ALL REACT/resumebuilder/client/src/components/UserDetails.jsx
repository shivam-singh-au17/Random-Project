import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const UserDetails = () => {
  return (
    <>
      <div className="PersonalDetails">
        <div className="btn fs-4 fw-bold">
          <Link className="nav-link text-light" to="/details">
            Personal Details
          </Link>
        </div>
        <div className="btn fs-4 fw-bold">
          <Link className="nav-link text-light" to="/education">
            Education
          </Link>
        </div>
        <div className="btn fs-4 fw-bold">
          <Link className="nav-link text-light" to="/experience">
            Experience
          </Link>
        </div>
        <div className="btn fs-4 fw-bold">
          <Link className="nav-link text-light" to="/skills">
            Skills
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
