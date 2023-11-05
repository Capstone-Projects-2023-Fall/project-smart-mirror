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
      <img src={CloudsSVG} alt="Clouds" width="100" height="100" />
      <p>The current temperature is: {weatherData.temperature}°F</p>
      <p>Weather Condition: {weatherData.weatherDescription}</p>
      <p>UV Index: {weatherData.uvIndex}</p>
    </div>
  );
};

export default TemperatureDisplay;