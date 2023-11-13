import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js';
import CloudBoltSVG from "../svg/cloud-bolt-svgrepo-com.svg";
import CloudRainAltSVG from "../svg/cloud-rain-alt-svgrepo-com.svg";
import CloudSunAltSVG from "../svg/cloud-sun-alt-svgrepo-com.svg";
import CloudsSVG from "../svg/clouds-svgrepo-com.svg";
import SunSVG from "../svg/sun-svgrepo-com.svg";
import SnowAltSVG from "../svg/snow-alt-svgrepo-com.svg";
import Freezing_Sleet from "../svg/cloud-sleet-svgrepo-com.svg";
import RainSVG from "../svg/cloud-rain-svgrepo-com.svg";
import './App.css';
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

const supabaseURL = process.env.SUPABASE_URL;
const supabaseKEY = process.env.SUPERBASE_KEY;

export const supabase = createClient(supabaseURL, supabaseKEY);

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

  const userId = localStorage.getItem('user_id');

  useEffect(() => {
    if (userId) {
      fetchWeatherDataForUser(userId);
    }
  }, [userId]);

  async function fetchWeatherDataForUser(userId) {
    setIsLoading(true);
    setError(null);

    const hardCoded= '76066fc0-7811-4bb1-9652-8f68403bcff4';
  
    try {
      // Fetch the user location from Supabase
      let { data: user, error: userError } = await supabase
        .from('users') // Replace with your actual table name
        .select('location') // Assuming 'location' is the column with the lat/lon data
        .eq('id', hardCoded) // Match the user id
        .single(); 
  
      if (userError) throw new Error(userError.message);

      const userLocation = JSON.parse(user.location); 
      
      // Construct the weather API URL with the user's location
      const weatherApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${user.location.lat}&longitude=${user.location.lon}&current=temperature_2m,precipitation,rain,weathercode&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FNew_York`;
      
      const weatherResponse = await fetch(weatherApiUrl);
      
      if (!weatherResponse.ok) {
        throw new Error(`HTTP error! status: ${weatherResponse.status}`);
      }
      
      const weatherData = await weatherResponse.json();
      setWeatherData({
        city: weatherData.city, 
        temperature: weatherData.temperature, 
        uvIndex: weatherData.uvIndex, 
        weatherCode: weatherData.weatherCode, 
        weatherDescription: weatherData.weatherDescription 
      });
      
    } catch (error) {
      setError(`Failed to fetch user location or weather data: ${error.toString()}`);
    } finally {
      setIsLoading(false);
    }
  }
  
  useEffect(() => {
    const toggleViewIntervalId = setInterval(() => {
      setShowWeeklyForecast(prev => !prev);
    }, 60000);
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
      <p className="temperature">{weatherData.temperature}Â°F</p>
      <p className="weather-condition">{weatherData.weatherDescription}</p>
      <p className="uv-index">UV Index: {weatherData.uvIndex}</p>
    </div>
  );
};

export default TemperatureDisplay;