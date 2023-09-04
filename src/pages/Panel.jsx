import React from "react";
import Insights from "../components/panel/Insights";
import Heading from "../components/panel/Heading";
import Graph from "../components/panel/Graph";
import Option from "../components/panel/option/Option";
import { Outlet } from "react-router-dom";




const Panel = () => {
  return (
      <main>
      <section>
      {/* <div className="position-relative h-75">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f2f2f5"
              fill-opacity="1"
              d="M0,192L480,64L960,0L1440,192L1440,0L960,0L480,0L0,0Z"
            ></path>
          </svg>
          <div className="position">
          
        </div>
        </div> */}
      <Heading />
      <Insights />
      </section>
      
      <Graph />
      <Option />
      <Outlet />
      
    </main>
  );
};

export default Panel;
