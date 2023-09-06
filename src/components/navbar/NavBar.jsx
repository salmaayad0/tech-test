import React from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { userAuth } = useSelector((state) => state.authslice);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Shelter Technical Test
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
          <Link className="nav-link" to="/">
                Landing 
                <span className="sr-only">(current)</span>
            </Link>
          </li>
          {
              userAuth && 
              <li className="nav-item"> 
              <Link className="nav-link" to="/panel">
              Panel
            </Link> 
            </li>
            }
            <DropDown />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
