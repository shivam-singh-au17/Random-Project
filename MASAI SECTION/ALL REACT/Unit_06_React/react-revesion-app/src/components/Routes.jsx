import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ClockApp from "./ClockApp";
import CounterApp from "./CounterApp";
import FetchDataApp from "./FetchDataApp";
import MyToDo from "./MyToDo";
import NavBar from "./NavBar";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="container mt-4 text-center">
          <Switch>
            <Route path="/" exact>
              <FetchDataApp myTitle="Fetch Data App" />
            </Route>

            <Route path="/counter" exact>
              <CounterApp myTitle="Counter App" />
            </Route>

            <Route path="/clock" exact>
              <ClockApp myTitle="Clock App" />
            </Route>

            <Route path="/todo" exact>
              <MyToDo myTitle="To Do App" />
            </Route>

            <Route>
              <div className="showError">
                <div className="errorSection">
                  <div className="rightRror">
                    <p className="pageNotFound">PAGE NOT FOUND</p>
                    <p className="notFound">404</p>
                    <p className="notFoundTxt">Out of nothing, something.</p>
                  </div>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
