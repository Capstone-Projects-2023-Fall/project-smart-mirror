import React, { useState, useEffect } from 'react';
import TemperatureDisplay from './weather';
import './forecast.css'; 

const WeeklyForecast = () => {
  const [displayWeekly, setDisplayWeekly] = useState(false);
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    async function fetchWeeklyForecast() {
      const url = "https://api.open-meteo.com/v1/forecast?latitude=39.9523&longitude=-75.1638&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_sum&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America/New_York";
      
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const dailyData = data.daily;
        
        // Extract the relevant parts of the data for the 7-day forecast
        const sevenDayForecast = dailyData.time.slice(0, 7).map((time, index) => {
          return {
            date: time, // You might want to format this date
            maxTemp: dailyData.temperature_2m_max[index],
            minTemp: dailyData.temperature_2m_min[index],
            weatherCode: dailyData.weathercode[index],
            precipitation: dailyData.precipitation_sum[index]
          };
        });
        
        setForecastData(sevenDayForecast);
        setDisplayWeekly(true);
      } catch (error) {
        console.error("There was a problem fetching the weather data:", error);
      }
    }

    fetchWeeklyForecast();
  }, []);

  if (!displayWeekly) {
    return <div>Loading weekly forecast...</div>;
  }

  return (
    <div className="weekly-forecast">
      {forecastData.map((dayForecast, index) => (
        // Make sure TemperatureDisplay component can accept and display new props
        <TemperatureDisplay key={index} weatherData={dayForecast} />
      ))}
    </div>
  );
};

export default WeeklyForecast;
