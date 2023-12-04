import React, { useState, useEffect } from 'react';
import CloudBoltSVG from "../svg/cloud-bolt-svgrepo-com.svg";
import CloudRainAltSVG from "../svg/cloud-rain-alt-svgrepo-com.svg";
import CloudSunAltSVG from "../svg/cloud-sun-alt-svgrepo-com.svg";
import CloudsSVG from "../svg/clouds-svgrepo-com.svg";
import SunSVG from "../svg/sun-svgrepo-com.svg";
import SnowAltSVG from "../svg/snow-alt-svgrepo-com.svg";
import Freezing_Sleet from "../svg/cloud-sleet-svgrepo-com.svg";
import RainSVG from "../svg/cloud-rain-svgrepo-com.svg";
import './weather.css';
import WeeklyForecast from './forecast';

const weatherCodeToSVG = {
  0: SunSVG,
  1: SunSVG,
  2: CloudSunAltSVG,
  3: CloudsSVG,
  51: CloudRainAltSVG,
  53: CloudRainAltSVG,
  55: CloudRainAltSVG,
  61: RainSVG,
  63: RainSVG,
  65: RainSVG,
  66: Freezing_Sleet,
  67: Freezing_Sleet,
  71: SnowAltSVG,
  73: SnowAltSVG,
  75: SnowAltSVG,
  77: SnowAltSVG,
  80: RainSVG,
  82: RainSVG,
  85: RainSVG,
  86: RainSVG,
  95: CloudBoltSVG,
  96: CloudBoltSVG,
  99: CloudBoltSVG
};

const getWeatherSVG = (weatherCode) => {
  return weatherCodeToSVG[weatherCode] || CloudsSVG;
};

const TemperatureDisplay = () => {
  const [weatherData, setWeatherData] = useState({
    city: '',
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
          city: data.city,
          temperature: data.temperature,
          uvIndex: data.uvIndex,
          weatherCode: data.weatherCode,
          weatherDescription: data.weatherDescription
        });
      } catch (error) {
        setError(error.toString());
      } finally {
        setIsLoading(false);
      }
    }
    fetchWeatherData();
    const fetchIntervalId = setInterval(fetchWeatherData, 60000);
    return () => clearInterval(fetchIntervalId);
  }, []);

  useEffect(() => {
    const toggleViewIntervalId = setInterval(() => {
      setShowWeeklyForecast(prev => !prev);
    }, 10000);
    return () => clearInterval(toggleViewIntervalId);
  }, []);

  const WeatherSVG = getWeatherSVG(weatherData.weatherCode);

  if (showWeeklyForecast) {
    return isLoading ? <div className="loading-box">Loading Weekly Forecast...</div> : <WeeklyForecast />;
  }

  if (error) {
    return <div className="error-box">Error: {error}</div>;
  }

  if (isLoading) {
    return <div className="loading-box">Loading...</div>;
  }

  return (
    <div className="temperature-display">
      <h2 className="title">{weatherData.city}</h2>
      <img src={WeatherSVG} alt={weatherData.weatherDescription} width="100" height="100" />
      <p className="temperature">{weatherData.temperature}°F</p>
      <p className="weather-condition">{weatherData.weatherDescription}</p>
      <p className="uv-index">UV Index: {weatherData.uvIndex}</p>
    </div>
  );
};

export default TemperatureDisplay;