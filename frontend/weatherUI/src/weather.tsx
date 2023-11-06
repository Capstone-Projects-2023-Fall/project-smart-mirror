import React, { useState, useEffect } from 'react';
import CloudBoltSVG from "./svg/cloud-bolt-svgrepo-com.svg";
import CloudRainAltSVG from "./svg/cloud-rain-alt-svgrepo-com.svg";
import CloudSunAltSVG from "./svg/cloud-sun-alt-svgrepo-com.svg";
import CloudsSVG from "./svg/clouds-svgrepo-com.svg";
import SnowAltSVG from "./svg/snow-alt-svgrepo-com.svg";

interface WeatherData {
  temperature: number;
  uvIndex: number;
}


const weatherCodeToSVG = {
  0: CloudsSVG,
  1: CloudSunAltSVG,
  2: CloudRainAltSVG,
  3: SnowAltSVG,
  4: CloudBoltSVG,

};


const getWeatherSVG = (weatherCode: number) => {
  return weatherCodeToSVG[weatherCode] || CloudsSVG; 
};

const TemperatureDisplay: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    temperature: 0,
    uvIndex: 0,
  });

  const hardcodedWeatherCode = 2; 
  const hardcodedWeatherDescription = 'Rainy'; 
  const WeatherSVG = getWeatherSVG(hardcodedWeatherCode);

  useEffect(() => {
    async function fetchWeatherData() {
      const url = "https://api.open-meteo.com/v1/forecast?latitude=39.9523&longitude=-75.1638&current=temperature_2m,precipitation,rain,weathercode&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FNew_York"; // Replace with your actual API endpoint
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
    const intervalId = setInterval(fetchWeatherData, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="temperature-display">
      {/* Dynamically loaded SVG based on the hardcoded weather condition */}
      <img src={WeatherSVG} alt={hardcodedWeatherDescription} width="100" height="100" />
      <p>The current temperature is: {weatherData.temperature}°F</p>
      <p>Weather Condition: {hardcodedWeatherDescription}</p>
      <p>UV Index: {weatherData.uvIndex}</p>
    </div>
  );
};

export default TemperatureDisplay;
