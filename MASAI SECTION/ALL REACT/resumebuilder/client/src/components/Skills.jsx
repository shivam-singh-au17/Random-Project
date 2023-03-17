import React, { useState } from "react";
import "./style.css";
import UserDetails from "./UserDetails";
import { useContext } from "react";
import { ThemeContexts4 } from "../contexts/ThemeContexts4";
import axios from "axios";

const Skills = () => {
  const { theme4, handleChangeTheme4 } = useContext(ThemeContexts4);
  const [skill, setSkill] = useState("");

  const handleClick = () => {
    const jsonData = {
      skills: skill,
    };
    axios.post("https://instagramclonedata.herokuapp.com/skills/", jsonData);
    alert("Successfully Submited ...");
    handleChangeTheme4();
    setSkill("");
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
              <h1 className="my-3">Skills</h1>

              <div className="mb-3">
                <label htmlFor="skill" className="form-label">
                  Add Skills
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="Company"
                  placeholder="Add Skills"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                />
              </div>

              <button
                type="button"
                className="btn btn-primary px-5 btn-lg float-end"
                disabled={theme4}
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

export default Skills;
