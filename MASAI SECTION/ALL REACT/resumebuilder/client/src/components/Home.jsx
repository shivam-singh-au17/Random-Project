import React from "react";
import resume from "./img/resume.png";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className="row maxWidth">
      <div className="col ResumePic">
        <div className="textWidth">
          <h1>BUILD YOUR RESUME THE SMART WAY.</h1>

          <p className="fs-4">
            Easily create an{" "}
            <span className="text-primary fw-bold">out of this world</span>{" "}
            resume with expert content that can be customized just for you!
          </p>
          <div className="d-grid gap-2 col-6 mx-auto mt-4 float-start">
            <button className="btn btn-primary fs-5" type="button">
              <Link className="nav-link text-light" to="/create">
                Create Resume
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="col ResumePic">
        <img className="img-fluid" src={resume} alt="Home Resume Pic" />
      </div>
    </div>
  );
};

export default Home;
