import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import "./styles.css";

function Weather() {
  const [searchValue, setsearchValue] = useState("karwar");
  const [tempInfo, settempInfo] = useState({});
  const getWeather = async () => {
    try {
      let url = `
      https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=487b529dedb3cbdd9b543a55589c7a97`;
      let res = await fetch(url);
      let data = await res.json();
      // console.log(data);
      const { temp, humidity, pressure } = data.main;
      // console.log(temp,humidity,pressure);
      const { main: weathermood } = data.weather[0];
      // console.log(weathermood);
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      settempInfo(myWeatherInfo);
      // console.log(myWeatherInfo.country);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setsearchValue(e.target.value)}
          />
          <button type="button" className="searchButton" onClick={getWeather}>
            search
          </button>
        </div>
      </div>
     <WeatherCard tempInfo={tempInfo}/>
    </>
  );
}

export default Weather;
