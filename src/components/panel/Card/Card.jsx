import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import CountUp from "react-countup";
import style from "./Card.module.css";

const Card = (props) => {
  const {num, title, countUp } = props.card;

  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className={`d-flex justify-content-between m-2 ` + style.space}>
        {/* right side */}
        <div className="p-3">
          <div className="mb-2">
            <BsFillInfoCircleFill color="var(--blue)" size={30} />
          </div>
          <div className="d-flex flex-column">
            <span className={`mb-1 ` + style.text}>{num}</span>
            <span className={`mb-1 ` + style.text}>{title}</span>
          </div>
        </div>

        {/* left side */}
        <div className="p-3 align-self-center">
          <span className={style.countUp}>+</span>
          <span className={style.countUp}>
            <CountUp start={0} end={countUp} duration={4} />
          </span>
          <span className={style.countUp}>%</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
