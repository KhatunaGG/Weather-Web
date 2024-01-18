import React from "react";
import style from "./output.module.css";
import { useState } from "react";

const Output = ({ weather }) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(
    (new Date().getMonth() + 1).toString().padStart(2, "0")
  );
  const [day, setDay] = useState(new Date().getDate());

  return (
    <div className={style.output}>
      <div className={style.temp__wrapper}>
        <div className={style.output__temp}>{weather.currentTemp}°</div>
      </div>
      <div className={style.city__inner}>
        <h1 className={style.city}>{weather.city}</h1>
        <div className={style.city__date}>
          <span>{day < 10 ? "0" + day : day} </span>
          <span>{month} </span>
          <span>{year}</span>
        </div>
      </div>
      <div className="output__icon"></div>
    </div>
  );
};

export default Output;
