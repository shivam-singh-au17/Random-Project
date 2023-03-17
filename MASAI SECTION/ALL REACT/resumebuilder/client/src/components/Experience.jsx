import React, { useState } from 'react'
import "./style.css";
import UserDetails from "./UserDetails";
import { useContext } from "react";
import { ThemeContexts3 } from "../contexts/ThemeContexts3";
import axios from "axios";

const Experience = () => {
  const { theme3, handleChangeTheme3 } = useContext(ThemeContexts3);
    const [company, setCompany] = useState("");
    const [startYear, setStartYear] = useState("");
    const [endYear, setEndYear] = useState("");
  const [designation, setDesignation] = useState("");

      const handleClick = () => {
      const jsonData = {
        company: company,
        startYear: startYear,
        endYear: endYear,
        designation: designation,
      };
      axios.post(
        "https://instagramclonedata.herokuapp.com/experience/",
        jsonData
      );
      alert("Successfully Submited ...");
      handleChangeTheme3();
      setCompany("");
      setStartYear("");
      setEndYear("");
      setDesignation("");
    };
  
    return (
      <>
        <div className="row maxWidth">
          <div className="col-4">
            <UserDetails />
          </div>
          <div className="col-8">
            <div className="PersonalDetailsBox">
              <div className="mt-5 fs-5">
                <h1 className="my-3">Experience</h1>

                <div className="mb-3">
                  <label htmlFor="company" className="form-label">
                    Company
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    id="Company"
                    placeholder="Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="startYear" className="form-label">
                    Start Year
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="startYear"
                    placeholder="Start Year"
                    value={startYear}
                    onChange={(e) => setStartYear(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="endYear" className="form-label">
                    End Year
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="endYear"
                    placeholder="End Year"
                    value={endYear}
                    onChange={(e) => setEndYear(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="designation" className="form-label">
                    Designation
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="designation"
                    placeholder="Designation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-primary px-5 btn-lg float-end"
                  disabled={theme3}
                  onClick={handleClick}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Experience
