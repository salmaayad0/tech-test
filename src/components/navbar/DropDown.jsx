import React from "react";
import { FaUserAlt } from "react-icons/fa";
import AuthCheck from "../auth/AuthCheck";

const DropDown = () => {
  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <FaUserAlt size={17} />
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <AuthCheck />
      </div>
    </div>
  );
};

export default DropDown;
