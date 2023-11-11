import React, { useState, useEffect } from 'react';
import './App.css'; 

const WeeklyForecast = () => {
  const [forecastData, setForecastData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeeklyForecast() {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:5000/weather/weekly/19128");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        // Extracting the max and min temperatures from the daily object
        const maxTemps = data.daily.temperature_2m_max;
        const minTemps = data.daily.temperature_2m_min;

        // Convert UNIX timestamps to days of the week
        const daysOfWeek = data.daily.time.map(unixTime => 
          new Date(unixTime * 1000).toLocaleDateString('en-US', { weekday: 'short' })
        );

        const weeklyForecastData = daysOfWeek.map((day, index) => ({
          day,
          maxTemp: maxTemps[index],
          minTemp: minTemps[index],
        }));

        setForecastData(weeklyForecastData);
      } catch (error) {
        console.error("There was a problem fetching the weather data:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchWeeklyForecast();
  }, []);

  if (isLoading) {
    return <div>Loading weekly forecast...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  return (
    <div className="weekly-forecast">
      {forecastData.map((dayForecast, index) => (
        <div key={index} className="daily-forecast">
          <p className="day">{dayForecast.day}</p>
          <p className="temperature">Max: {dayForecast.maxTemp}°F</p>
          <p className="temperature">Min: {dayForecast.minTemp}°F</p>
        </div>
      ))}
    </div>
  );
};

export default WeeklyForecast;
