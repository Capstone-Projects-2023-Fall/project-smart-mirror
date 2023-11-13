import React from 'react';
import CloudBoltSVG from "./svg/cloud-bolt-svgrepo-com.svg";
import CloudRainAltSVG from "./svg/cloud-rain-alt-svgrepo-com.svg";
import CloudSunAltSVG from "./svg/cloud-sun-alt-svgrepo-com.svg";
import CloudsSVG from "./svg/clouds-svgrepo-com.svg";
import SnowAltSVG from "./svg/snow-alt-svgrepo-com.svg";

// Mapping weather codes to SVGs
const weatherCodeToSVG = {
  0: CloudsSVG,
  1: CloudSunAltSVG,
  2: CloudRainAltSVG,
  3: SnowAltSVG,
  4: CloudBoltSVG,
};

const getWeatherSVG = (weatherCode) => {
  return weatherCodeToSVG[weatherCode] || CloudsSVG; 
};

const DailyForecast = ({ weatherData }) => {
  const WeatherSVG = getWeatherSVG(weatherData.weatherCode);

  return (
    <div className="daily-forecast">
      <h3>{weatherData.day}</h3>
      <img src={WeatherSVG} alt="Weather condition" width="100" height="100" />
      <p>Max Temp: {weatherData.maxTemp}°F</p>
      <p>Min Temp: {weatherData.minTemp}°F</p>
      <p>Precipitation: {weatherData.precipitation} inches</p>
    </div>
  );
};

export default DailyForecast;