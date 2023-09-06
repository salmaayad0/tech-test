import React from "react";
import { FaUserAlt } from "react-icons/fa";
import AuthCheck from "../auth/AuthCheck";

const DropDown = () => {
  return (
    <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href=""
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FaUserAlt size={15} />
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <AuthCheck />
            </div>
          </li>
  );
};

export default DropDown;
