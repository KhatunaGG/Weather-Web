import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import { useEffect, useState } from "react";
import Output from "./components/output/Output";
import style from "../src/components/form/form.module.css";

function App() {
  const [city, setCity] = useState("tbilisi");
  const [weather, setWeather] = useState({});

  const searchWeather = (e) => {
    if (city !== "") {
      // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8230c11d1c9b581aebc5cc25ce54c58c&units=metric`)
      fetch(`https://lobster-app-kps4x.ondigitalocean.app/api/weather/${city}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
        });
      setCity("");
    }
  };

  useEffect(() => {
    searchWeather();
  }, []);

  return (
    <div className="App">
      <img src="/assets/bgmobile.png" alt="" className="bg__img__mobile" />
      <img src="/assets/bgtablet.png" alt="" className="bg__img__tablet" />
      <img src="/assets/bgdesktop.png" alt="" className="bg__img__desktop" />

      <div className={style.search}>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          className={style.city__input}
          placeholder="Search Location..."
        />
        <button onClick={searchWeather} className={style.search__btn}>
          <img
            className={style.logo}
            style={{ width: "11", height: "12" }}
            src="/assets/search.png"
            alt=""
          />
          <img
            className={style.logo_mobile}
            style={{ width: "28", height: "28" }}
            src="/assets/searchmobile.svg"
            alt=""
          />
        </button>
      </div>
      <Sidebar weather={weather} />
      <Output weather={weather} />
    </div>
  );
}

export default App;
