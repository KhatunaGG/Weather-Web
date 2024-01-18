import React from "react";
import style from "./sidebar.module.css";

const Sidebar = ({ weather }) => {
  return (
    <>
      <div className={style.sidebar}>
        <div className={style.details}>
          <div className={style.details__inner}>
            <h3 className={style.weatherdetails}>
              {weather.currentWeatherDesc}
            </h3>
            <h2 className={style.text__h2}></h2>
            <div className={style.item}>
              <div text>Current Temp</div>
              <div className={style.temp}>
                <div className="temp__num">{weather.currentTemp}</div>
              </div>
            </div>
            <div className={style.item}>
              <div text>Max Temp</div>
              <div className={style.temp}>
                <div className="temp__num">{weather.maxTemp}</div>
              </div>
            </div>
            <div className={style.item}>
              <div text>Min Temp</div>
              <div className={style.temp}>
                <div className="temp__num">{weather.minTemp}</div>
              </div>
            </div>
            <div className={style.item}>
              <div text>Wind Speed</div>
              <div className={style.temp}>
                <div className="temp__num">{weather.windSpeed}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
