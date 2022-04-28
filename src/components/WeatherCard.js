import React, { useEffect } from "react";

function WeatherCard(props) {
  const [weatherState, setweatherState] = React.useState("");
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = props.tempInfo;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setweatherState("wi wi-day-cloudy");
          break;
        case "Mist":
          setweatherState("wi wi-dust");
          break;
        case "Clear":
          setweatherState("wi wi-day-sunny");
          break;
        case "Haze":
          setweatherState("wi wi-fog");
          break;
        case "Snow":
          setweatherState("wi wi-snow");
          break;
        default:
          break;
      }
    }
  }, [weathermood]);
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  // console.log(props.tempInfo);
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={weatherState}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;c</span>
          </div>
          <div className="description">
            <div className="weatherCondition">
              {weathermood}
              <div className="place">
                {name} , {country}
              </div>
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} PM <br />
                sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default WeatherCard;
