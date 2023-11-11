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
    weatherCode: 0,
    weatherDescription: 'Loading...',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showWeeklyForecast, setShowWeeklyForecast] = useState(false);

  useEffect(() => {
    async function fetchWeatherData() {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("http://localhost:5000/weather/19128");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setWeatherData({
          temperature: data.temperature,
          uvIndex: data.uvIndex,
          weatherCode: data.weatherCode,
          weatherDescription: data.weatherDescription
        });
      } catch (error) {
        console.error("There was a problem fetching the weather data:", error);
        setError(error.toString());
      } finally {
        setIsLoading(false);
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

  const WeatherSVG = getWeatherSVG(weatherData.weatherCode);

  if (showWeeklyForecast) {
    return <WeeklyForecast />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="temperature-display">
      <img src={WeatherSVG} alt={weatherData.weatherDescription} width="100" height="100" />
      <p>The current temperature is: {weatherData.temperature}°F</p>
      <p>Weather Condition: {weatherData.weatherDescription}</p>
      <p>UV Index: {weatherData.uvIndex}</p>
    </div>
  );
};

export default TemperatureDisplay;
