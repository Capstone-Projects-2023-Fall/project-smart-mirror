import { useState, useEffect } from 'react';
import TemperatureDisplay from './weather';
import './forecast.css';

const WeeklyForecast = () => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    async function fetchWeeklyForecast() {
      const url = "https://api.open-meteo.com/v1/forecast?latitude=39.9523&longitude=-75.1638&hourly=temperature_2m,uv_index&daily=weather_code&temperature_unit=fahrenheit&timezone=America%2FNew_York";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const dailyData = data.daily;
        const sevenDayForecast = dailyData.time.slice(0, 7).map((time, index) => {
          const date = new Date(time * 1000);
          const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
          return {
            day: dayOfWeek,
            maxTemp: dailyData.temperature_2m_max[index],
            minTemp: dailyData.temperature_2m_min[index],
            weatherCode: dailyData.weathercode[index],
            precipitation: dailyData.precipitation_sum[index]
          };
        });
        setForecastData(sevenDayForecast);
      } catch (error) {
        console.error("There was a problem fetching the weekly forecast:", error);
      }
    }
    fetchWeeklyForecast();
  }, []);

  if (!forecastData.length) {
    return <div>Loading weekly forecast...</div>;
  }

  return (
<div className="weekly-forecast">
  {forecastData.map((dayForecast, index) => (
    <DayForecast key={index} weatherData={dayForecast} />
  ))}
</div>

  );
};

export default WeeklyForecast;
