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
        //Extracts the max and min tempeeatures from the daily object
        const maxTemps = data.daily.temperature_2m_max;
        const minTemps = data.daily.temperature_2m_min;
        // Converts Unix timestamps to days of the week.
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
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchWeeklyForecast();
  }, []);

  if (isLoading) {
    return <div className="loading-box">Loading weekly forecast...</div>;
  }

  if (error) {
    return <div className="error-box">Error fetching data: {error}</div>;
  }

  return (
    <div className="weekly-forecast-container">
      <h2 className="weekly-forecast-title">Weekly Forecast</h2>
      <div className="weekly-forecast">
        {forecastData.map((dayForecast, index) => (
          <div key={index} className="daily-forecast">
            <p className="day">{dayForecast.day}</p>
            <p className="temperature">Max: {dayForecast.maxTemp}°F</p>
            <p className="temperature">Min: {dayForecast.minTemp}°F</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WeeklyForecast;