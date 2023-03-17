import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContexts1 } from "../contexts/ThemeContexts1";
import { ThemeContexts2 } from "../contexts/ThemeContexts2";
import { ThemeContexts3 } from "../contexts/ThemeContexts3";
import { ThemeContexts4 } from "../contexts/ThemeContexts4";

const NavBar = () => {
  const { theme1 } = useContext(ThemeContexts1);
  const { theme2 } = useContext(ThemeContexts2);
  const { theme3 } = useContext(ThemeContexts3);
  const { theme4 } = useContext(ThemeContexts4);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fs-4">
      <div className="container-fluid">
        <Link className="navbar-brand fs-3" to="/">
          R<span className="text-primary fs-5">BUILDER</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/create"}
              >
                Create
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  theme1 === true ||
                  theme2 === true ||
                  theme3 === true ||
                  theme4 === true
                    ? "active"
                    : "disabled"
                }`}
                aria-current="page"
                to={"/view"}
              >
                View
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
