import React, { useState, useEffect } from 'react';
import CloudBoltSVG from "./svg/cloud-bolt-svgrepo-com.svg";
import CloudRainAltSVG from "./svg/cloud-rain-alt-svgrepo-com.svg";
import CloudSunAltSVG from "./svg/cloud-sun-alt-svgrepo-com.svg";
import CloudsSVG from "./svg/clouds-svgrepo-com.svg";
import SnowAltSVG from "./svg/snow-alt-svgrepo-com.svg";
import WeeklyForecast from './forecast';

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

const TemperatureDisplay = () => {
  const [weatherData, setWeatherData] = useState({
    temperature: 0,
    uvIndex: 0,
  });
  const [showWeeklyForecast, setShowWeeklyForecast] = useState(false);

  const hardcodedWeatherCode = 2; 
  const hardcodedWeatherDescription = 'Rainy'; 
  const WeatherSVG = getWeatherSVG(hardcodedWeatherCode);

  useEffect(() => {
    async function fetchWeatherData() {
      const url = "YOUR_API_ENDPOINT";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setWeatherData({
          temperature: data.current.temperature_2m,
          uvIndex: data.daily.uv_index_max[0],
        });
      } catch (error) {
        console.error("There was a problem fetching the weather data:", error);
      }
    }

    fetchWeatherData();
    const fetchIntervalId = setInterval(fetchWeatherData, 60000);
    const toggleViewIntervalId = setInterval(() => {
      setShowWeeklyForecast(prev => !prev);
    }, 10000);

    return () => {
      clearInterval(fetchIntervalId);
      clearInterval(toggleViewIntervalId);
    };
  }, []);

  if (showWeeklyForecast) {
    return <WeeklyForecast />;
  }

  return (
    <div className="temperature-display">
      <img src={WeatherSVG} alt={hardcodedWeatherDescription} width="100" height="100" />
      <p>The current temperature is: {weatherData.temperature}°F</p>
      <p>Weather Condition: {hardcodedWeatherDescription}</p>
      <p>UV Index: {weatherData.uvIndex}</p>
    </div>
  );
};

export default TemperatureDisplay;
