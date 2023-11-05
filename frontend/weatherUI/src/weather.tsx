import React, { useState, useEffect } from 'react';
import CloudsSVG from "./svg/clouds-svgrepo-com.svg";


interface WeatherData {
  temperature: number;
  weatherDescription: string;
  uvIndex: number;
}

const TemperatureDisplay: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    temperature: 0,
    weatherDescription: '',
    uvIndex: 0,
  });

  useEffect(() => {
    async function fetchWeatherData() {
      const url = "https://api.open-meteo.com/v1/forecast?latitude=39.9523&longitude=-75.1638&current=temperature_2m,precipitation,rain,weathercode&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FNew_York";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setWeatherData({
          temperature: data.current.temperature_2m,
          weatherDescription: data.current.weatherDescription,
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
      {/* SVG directly in your component */}
      <svg width="300px" height="300px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.38846 12.7023C3.98522 12.1237 3 10.7636 3 9.17807C3 7.42863 4.3 5.8125 6.25 5.5C6.86168 4.0617 8.30934 3 9.9978 3C12.1607 3 13.9285 4.65893 14.05 6.75C14.8721 7.10549 15.5169 7.83126 15.8166 8.69914M5.38846 12.7023C4.50928 13.5938 4 14.7867 4 16.0315C4 18.7755 6.28335 21 9.1 21L16.75 21C19.0972 21 21 19.1279 21 16.8185C21 15.1039 19.951 13.5202 18.45 12.875C18.3457 11.0905 17.3135 9.5483 15.8166 8.69914M5.38846 12.7023C6.11557 11.9651 7.0957 11.4339 8.25 11.25C9.04989 9.3802 10.943 8 13.151 8C14.1227 8 15.0333 8.25474 15.8166 8.69914" stroke="#FFFFFF"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <p>The current temperature is: {weatherData.temperature}°F</p>
      <p>Weather Condition: {weatherData.weatherDescription}</p>
      <p>UV Index: {weatherData.uvIndex}</p>
    </div>
  );
};

export default TemperatureDisplay;