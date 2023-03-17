import React from "react";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Create from "./Create";
import Education from "./Education";
import Experience from "./Experience";
import Home from "./Home";
import error from "./img/error.png";
import NavBar from "./NavBar";
import Skills from "./Skills";
import "./style.css";
import View from "./View";

const Routes = () => {
  
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <NavBar />
          <Home />
        </Route>
        <Route path="/create">
          <NavBar />
          <Create
          />
        </Route>
        <Route path="/view">
          <NavBar />
          <View />
        </Route>
        <Route path="/details">
          <NavBar />
          <Create />
        </Route>
        <Route path="/education">
          <NavBar />
          <Education />
        </Route>
        <Route path="/experience">
          <NavBar />
          <Experience />
        </Route>
        <Route path="/skills">
          <NavBar />
          <Skills />
        </Route>
        <Route>
          <div className="showError">
            <div className="errorSection">
              <div className="leftErrorImg">
                <img src={error} alt="" />
              </div>
              <div className="rightRror">
                <button className="btn btn-secondary fs-5 mb-3" type="button">
                  <Link className="nav-link text-light" to="/">
                    Back to home
                  </Link>
                </button>
                <p className="pageNotFound">PAGE NOT FOUND</p>
                <p className="notFound">404</p>
                <p className="notFoundTxt">Out of nothing, something.</p>
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
