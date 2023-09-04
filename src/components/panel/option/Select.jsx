import React from "react";
import { Link } from "react-router-dom";
import style from "./Panel.module.css";

const Select = (props) => {
  const { name, num, url } = props.data;
  return (
    <div className="col-12 col-md-6">
      <div className={`d-flex justify-content-center m-3 ` + style.option}>
        <div className="w-50">
          <Link to={url} className="btn btn-light  rounded-2">
            <h3 className="text-primary">All {name}</h3>
            <h6 className="text-primary position-relative">
              Your app has{" "}
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-light">
                {num}
              </span>
            </h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Select;
