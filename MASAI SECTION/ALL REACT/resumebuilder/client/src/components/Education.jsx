import React, { useState } from "react";
import "./style.css";
import UserDetails from "./UserDetails";
import { useContext } from "react";
import { ThemeContexts2 } from "../contexts/ThemeContexts2";
import axios from "axios";

const Education = () => {
  const { theme2, handleChangeTheme2 } = useContext(ThemeContexts2);
  const [institute, setInstitute] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [degree, setDegree] = useState("");

    const handleClick = () => {
      const jsonData = {
        institute: institute,
        startYear: startYear,
        endYear: endYear,
        phone: degree,
      };
      axios.post(
        "https://instagramclonedata.herokuapp.com/education/",
        jsonData
      );
      alert("Successfully Submited ...");
      handleChangeTheme2();
      setInstitute("");
      setStartYear("");
      setEndYear("");
      setDegree("");
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
              <h1 className="my-3">Education</h1>

              <div className="mb-3">
                <label htmlFor="Institute" className="form-label">
                  Institute
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Institute"
                  placeholder="Institute"
                  value={institute}
                  onChange={(e) => setInstitute(e.target.value)}
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
                <label htmlFor="degree" className="form-label">
                  Degree
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="degree"
                  placeholder="Degree"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                />
              </div>

              <button
                type="button"
                className="btn btn-primary px-5 btn-lg float-end"
                disabled={theme2}
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
};

export default Education;
